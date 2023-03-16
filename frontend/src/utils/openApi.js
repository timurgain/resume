const BASE_URL = 'http://127.0.0.1:5000'  // backend Flask app

class OpenApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._options = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  }

  // User
  getResume(id) {
    this._options.method = 'GET';
    return this._request(`${this._baseUrl}/resumes/${id}`)
  }

  _request(url) {
    return fetch(url, this._options).then(response => this._convertResponseToJson(response))
  }

  _convertResponseToJson(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

}


const openApi = new OpenApi(BASE_URL)

export default openApi
