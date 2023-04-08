const BASE_URL = "http://127.0.0.1:5000/api"; // backend Flask app

class OpenApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._options = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  }

  getResume(id) {
    this._options.method = "GET";
    return this._request(`${this._baseUrl}/resumes/${id}`);
  }

  getImage(resumeId, fileType) {
    this._options.method = "GET";
    return fetch(
      `${this._baseUrl}/files?` +
        new URLSearchParams({ resume: resumeId, type: fileType }),
      this._options
    )
      .then((response) => {
        if (!response.ok) return Promise.reject(`Ошибка: ${response.status}`);
        return response.blob();
      })
      .then((blob) => URL.createObjectURL(blob));
  }

  _request(url) {
    return fetch(url, this._options).then((response) =>
      this._convertResponseToJson(response)
    );
  }

  _convertResponseToJson(response) {
    if (!response.ok) return Promise.reject(`Ошибка: ${response.status}`);
    return response.json();
  }
}

const openApi = new OpenApi(BASE_URL);

export default openApi;
