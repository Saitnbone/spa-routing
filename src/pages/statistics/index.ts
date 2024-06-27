// Импорты
import { PageTemplate } from "../../core/template/page";

export class StatisticsPage extends PageTemplate {
  // Поля для класса страницы настроек
  static TextObject = {
    mainTitle: "Statistics page",
  };

  // Конструктор
  constructor(id: string) {
    super(id);
  }

  //  Метод Рендеринга
  render() {
    const title = this.createHeaderTitle(StatisticsPage.TextObject.mainTitle);
    this.container.append(title);
    return this.container;
  }
}
