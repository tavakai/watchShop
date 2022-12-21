import React, { useState } from 'react';

function Form({ modalContent }) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="modal-body">
      <form>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {
            modalContent === 'signUp' ? 'Регистрация' : 'Войти'
          }
          </h5>
        </div>
        {
        modalContent === 'signUp' ? (
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Имя:
              <input onChange={(e) => handleChange(e)} type="text" value={value.name} name="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Введите имя" />
            </label>
          </div>
        ) : null
      }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email:
            <input onChange={(e) => handleChange(e)} type="email" value={value.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль:
            <input onChange={(e) => handleChange(e)} type="password" value={value.password} name="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {
              modalContent === 'signUp' ? 'Регистрация' : 'Войти'
            }
        </button>
      </form>
    </div>
  );
}

export default Form;
