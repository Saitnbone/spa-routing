// Импорты
import { PageTemplate } from "../../core/template/page";

// Класс для основной страницы приложения
export class MainPage extends PageTemplate {
  // Поля класса
  static TextObject = {
    mainTitle: "Main page",
  };

  // Конструктор для класса
  constructor(id: string) {
    super(id);
  }
  //   Метод ренедеринга страницы
  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.mainTitle);
    this.container.append(title);
    return this.container;
  }
}
