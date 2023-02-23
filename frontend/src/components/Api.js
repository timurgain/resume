export class Api {
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
    return fetch(`${this._baseUrl}/save_as_pdf`, this._options).then(response => response.json())
  }

  getUser() {
    this._options.method = 'GET';
    return fetch(`${this._baseUrl}/users/1`, this._options).then(response => response.json())
  }

}
