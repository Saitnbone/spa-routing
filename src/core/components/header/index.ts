// Импорты
import { Component } from "../../template/component";
import { PageIds } from "../../app";

// Массив кнопок приложения
const buttons = [
  {
    id: PageIds.MainPage,
    text: "Main page",
  },
  {
    id: PageIds.StatisticsPage,
    text: "Statistics page",
  },
  {
    id: PageIds.SettingsPage,
    text: "Settings page",
  },
];

export class Header extends Component {
  //
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  // Метод ренедеринга кнопок блока header
  renderButtons() {
    const buttonsBlock = document.createElement("div");
    buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      buttonsBlock.append(buttonHTML);
    });
    this.container.append(buttonsBlock);
  }

  // Метод ренедеринга блока с header
  render() {
    this.renderButtons();
    return this.container;
  }
}
