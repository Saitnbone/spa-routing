// Импорты для приложения
import { MainPage } from "../../pages/main";
import { SettingsPage } from "../../pages/settings";
import { StatisticsPage } from "../../pages/statistics";
import { PageTemplate } from "../template/page";
import { Header } from "../components/header";
import { ErrorPage } from "../../pages/error";
import { ErrorTypes } from "../../pages/error";

// Переменных для страниц приложения
export const enum PageIds {
  MainPage = "main-page",
  SettingsPage = "settings-page",
  StatisticsPage = "statistics-page",
  ErrorPage = "error-page",
}

// Класс для приложения
export class App {
  // Поля для приложения
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = "current-page";
  private initialPage: MainPage;
  private appHeader: Header;

  //   Функция вывода переключения страниц
  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: PageTemplate | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.SettingsPage) {
      page = new SettingsPage(idPage);
    } else if (idPage === PageIds.SettingsPage) {
      page = new StatisticsPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }
    if (page) {
      const pageHTML = page.render();
      pageHTML.id = this.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      console.log("hashchange", hash);
      App.renderNewPage(hash);
    });
  }

  // Конструктор для класса приложения
  constructor() {
    this.appHeader = new Header("header", "header__container");
    this.initialPage = new MainPage("main-page");
  }

  // Метод для запуска приложения
  render() {
    App.container.append(this.appHeader.render());
    App.renderNewPage("main-page");
    this.enableRouteChange();
  }
}
