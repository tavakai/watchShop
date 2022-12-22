class Api {
  constructor({
    baseUrl,
    headers,
  }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // Регистрация
  registration = async (user) => {
    const request = await fetch('/auth/registration', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(user),
    });
    return request;
  };

  // Авторизация
  authorization = async (user) => {
    const request = await fetch('/auth/login', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(user),
    });
    return request;
  };

  // Метод проверки ответа и преобразование в json
  getResponseData(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  }
}

const api = new Api({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
