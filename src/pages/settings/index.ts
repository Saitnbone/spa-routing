// Импорты
import { PageTemplate } from "../../core/template/page";

export class SettingsPage extends PageTemplate {
  // Поля для класса страницы настроек
  static TextObject = {
    mainTitle: "Settings page",
  };

  // Конструктор
  constructor(id: string) {
    super(id);
  }

  //  Метод Рендеринга
  render() {
    const title = this.createHeaderTitle(SettingsPage.TextObject.mainTitle);
    this.container.append(title);
    return this.container;
  }
}
