import React, { useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function Orderform({ user }) {
  const [input, setInput] = useState({ name: "", image: "" });
  const [message, setMessage] = useState(null);
  const [orderTrue, setOrderTrue] = useState(null);
  const [isRequest, setIsRequest] = useState(false);

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const orderHandler = async (e) => {
    setIsRequest(true);
    e.preventDefault();
    if (user) {
      const response = await fetch(`/order/${user.id}`, {
        method: "POST",
        headers: { "Content-type": "application/json;charSet=utf-8" },
        body: JSON.stringify(input),
      });

      if (response.ok) {
        const data = await response.json();
        setInput({ task: "", img: "" });
        setMessage(data.message);
        setOrderTrue(true);
        setIsRequest(false);
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } else {
      setMessage("Для заказа часов, вам необходимо зарегистрироваться.");
    }
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {orderTrue ? (
        <>
          {/* выводит "Заказ отправлен!" */}
          {message && (
            <div className="orderInputOut">
              <h2 className="orderMessage">{message}</h2>
            </div>
          )}
        </>
      ) : (
        <form onSubmit={orderHandler} id="orderForm" className="order">
          <h3 className="orderCenter">Заказать уникальные часы</h3>
          {/* выводит ошибку при заказе */}
          {message && <h2 className="orderInput ordeStatusRed">{message}</h2>}
          <div className="mb-3 orderInput">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label orderInput"
            >
              Введите название ваших часов
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={changeHandler}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 orderInput">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Укажите ссылку на пример подходящих вам часов
            </label>
            <input
              type="text"
              name="image"
              value={input.image}
              onChange={changeHandler}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="orderCenter">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isRequest ? "disabled" : ""}
            >
              Заказать
            </button>
          </div>
          {isRequest && <Preloader />}
        </form>
      )}
    </>
  );
}
