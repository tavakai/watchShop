import React, { useState } from 'react';

export default function Orderform() {
  // контролирует инпуты
  const [input, setInput] = useState({ name: '', image: '' });
  // выводит ошибку, если в заказе не все указано
  const [message, setMessage] = useState(null);
  // форма - пропадает, "Заказ отправлен!" - появляется
  const [orderTrue, setOrderTrue] = useState(null);

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const orderHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/order', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charSet=utf-8' },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      setInput({ task: '', img: '' });
      setMessage(data.message);
      setOrderTrue(true);
    } else {
      const data = await response.json();
      setMessage(data.message);
    }
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {orderTrue ? (
        <>
          {/* выводит "Заказ отправлен!" */}
          {message && <h2>{message}</h2>}
        </>
      ) : (
        <form onSubmit={orderHandler} id="orderForm">
          <h3>Заказать уникальные часы</h3>
          {/* выводит ошибку при заказе */}
          {message && <h2>{message}</h2>}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Введите название ваших часов</label>
            <input type="text" name="name" value={input.name} onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Укажите ссылку на пример подходящих вам часов</label>
            <input type="text" name="image" value={input.image} onChange={changeHandler} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Заказать</button>
        </form>
      )}
    </>
  );
}
