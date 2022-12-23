import React, { useState } from 'react';
import auth from '../api';

export default function Login() {
  const [input, setInput] = useState({ email: '', password: '' });
  // выводит ошибку, если нарушены правила авторизации
  const [err, setErr] = useState(null);

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // fetch авторизации
  const submitHandler = async (e) => {
    e.preventDefault();
    auth(input);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      {/* выводит ошибку при регистрации */}
      {err && <h2>{err}</h2>}
      <div className="mb-3">
        <label htmlFor="InputEmail1" className="form-label">
          Email
          <input name="email" value={input.email} onChange={changeHandler} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input name="password" value={input.password} onChange={changeHandler} type="password" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Войти</button>
    </form>
  );
}
