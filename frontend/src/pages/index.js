// constants

const menuBtn = document.querySelector('.menu-btn')
const savePdfBtn = document.querySelector('.save-pdf')


// components

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
  }

  open(btnElement) {
    this._popup.classList.add('popup_opened');
    btnElement.textContent = 'Close';
    document.addEventListener('keydown', this._handleEscClose.bind(this))
  }

  close(btnElement) {
    this._popup.classList.remove('popup_opened');
    btnElement.textContent = 'Menu';
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


class Api {
  constructor() {
    this._baseUrl = 'http://127.0.0.1:5000';
    this._options = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  }

  saveAsPdf() {
    this._options.method = 'GET';
    return fetch(`${this._baseUrl}/save_as_pdf`, this._options)
  }

}


// main

const menuPopup = new Popup('.popup');
menuPopup.setEventListeners();

const api = new Api();


menuBtn.addEventListener('click', () => {
  if (document.querySelector('.popup_opened')) {
    menuPopup.close(menuBtn)
  } else {
    menuPopup.open(menuBtn)
  }
});

savePdfBtn.addEventListener('click', () => {
  api.saveAsPdf()
    .then((response) => {
      if (!response.ok) {throw new Error(response.status)};
      return response.json()
    })
    .then((data) => alert(data.text))
    .catch((err) => reportError(`Error in connection to server: ${err}`))
})
