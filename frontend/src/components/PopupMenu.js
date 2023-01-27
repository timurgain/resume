import { Popup } from "./Popup.js";

export class PopupMenu extends Popup {
  constructor(popupSelector, menuBtnElement) {
    super(popupSelector);
    this._menuBtnElement = menuBtnElement;
  }

  open() {
    this._menuBtnElement.textContent = 'Close';
    super.open();
  }

  close() {
    this._menuBtnElement.textContent = 'Menu';
    super.close();
  }

}
