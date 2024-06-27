// Суперкласс для создания классов страниц приложения
export abstract class PageTemplate {
  protected container: HTMLElement;
  // Статик позваоляет образаться к элементам класса без создания инстанса класса
  static TextObject = {};

  //   Конструктор для классов
  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }

  //   Метод для создания заголовков у страниц
  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = text;
    return headerTitle;
  }

  render(){ 
    return this.container;
  }
}
