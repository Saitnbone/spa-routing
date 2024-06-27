// Класс для создания компонента заголовка
export abstract class Component {
  // Поле
  protected container: HTMLElement;

  //
  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  redner() {
    return this.container;
  }
}
