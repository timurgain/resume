const menuBtn = document.querySelector('.menu-btn')

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose.bind(this))
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose.bind(this))
  }

  setEventListeners() {
    document.addEventListener('mousedown', (evt) => this._handleClickClose(evt))
  }

  _handleEscClose(evt) {
    if (evt.key !== 'Escape' || !this._popup) return;
    this.close()
  }

  _handleClickClose(evt) {
    if (evt.target === document.querySelector('html')) {
      this.close();
    }
  }
}


// main

const menuPopup = new Popup('.popup');

menuPopup.setEventListeners();

menuBtn.addEventListener('click', () => {
  if (document.querySelector('.popup_opened')) {
    menuPopup.close()
  } else {
    menuPopup.open()
  }
});

