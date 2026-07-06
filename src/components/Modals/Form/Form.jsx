import React, { useState } from 'react';
import api from '../../../utils/api';
import Preloader from '../../Preloader/Preloader';

function Form({ modalContent }) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null);
  const [succes, setSucces] = useState(false);

  function handleChange(e) {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (modalContent === 'signUp') {
      api.registration(value)
        .then((res) => {
          if (res.status === 200) {
            setSucces(true);
            window.location.href = '/';
          }
        });
    } else {
      api.authorization(value)
        .then((res) => {
          if (res.status === 200) {
            setSucces(true);
            window.location.href = '/';
          }
        });
    }
  }

  return (
    <div className="modal-body">
      {
        !succes ? (
          <form onSubmit={(e) => handleSubmit(e)}>
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
              <label htmlFor="exampleInputEmail" className="form-label">
                Email:
                <input onChange={(e) => handleChange(e)} type="email" value={value.email} name="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Введите почту" />
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
        ) : (
          <Preloader />
        )
      }
    </div>
  );
}

export default Form;
