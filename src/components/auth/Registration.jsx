import React, { useState } from 'react';

export default function Registration() {
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  // выводит ошибку, если нарушены правила авторизации
  const [err, setErr] = useState(null);

  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // fetch регистрации
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/registration', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      window.location.href = '/';
      setInput({ name: '', email: '', password: '' });
    } else {
      const data = await response.json();
      setErr(data.message);
    }
  };
  return (
    <>
      <h1>Registration</h1>
      {/* выводит ошибку при регистрации */}
      {err && <h2>{err}</h2>}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
            <input name="name" value={input.username} onChange={changeHandler} type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmailReg" className="form-label">
            Email
            <input name="email" value={input.email} onChange={changeHandler} type="email" className="form-control" id="InputEmailReg" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input name="password" value={input.password} onChange={changeHandler} type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </>
  );
}
