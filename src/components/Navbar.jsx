import React, { useState } from 'react';
import Modal from './Modals/Modal';

export default function Navbar({ user }) {
  const [modalContent, setModalContent] = useState('');
  function handleClick(event) {
    const recipient = event.target.getAttribute('data-bs-whatever');
    if (recipient === 'signUp') {
      setModalContent('signUp');
    } else {
      setModalContent('signIn');
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Watch Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <div className="menu">
              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="#catalog">Каталог</a>
              </div>

              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="#orderForm">Сделать заказ</a>
              </div>

              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="#footer">Контакты</a>
              </div>
            </div>

            <ul className="navbar-nav">
              {!user ? (
                <>
                  <li className="nav-item">
                    <button onClick={(event) => handleClick(event)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="signUp">signUp</button>
                  </li>
                  <li className="nav-item">
                    <button onClick={(event) => handleClick(event)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="signIn">signIn</button>
                  </li>
                </>
              ) : (
                <>
                  <h5>
                    Привет
                    {' '}
                    {user.name}
                  </h5>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/auth/logout">Logout</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Modal modalContent={modalContent} />
    </>
  );
}
