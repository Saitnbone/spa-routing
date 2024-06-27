// Импорты
import { PageTemplate } from "../../core/template/page";

export const enum ErrorTypes {
  Error_404 = 404,
}

// Класс страницы с ошибкой
export class ErrorPage extends PageTemplate {
  // Поля класса
  private errorType: ErrorTypes | string;
  static TextObject: { [prop: string]: string } = {
    "404": "Error! Page is not found",
  };

  // Конструктор для класса
  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  //   Метод рендеринга страницы с ошибкой
  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    this.container.append(title);
    return this.container;
  }
}
