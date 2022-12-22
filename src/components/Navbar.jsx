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

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="../img/watchshoplogo.png" alt="watch-logo" width="100" height="80" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="menu">
            <div className="nav-item">
              <a className="scroll-to" aria-current="page" href="#catalog"><button type="button" className="btn btn-dark">Каталог</button></a>
            </div>

            <div className="nav-item">
              <a className="scroll-to" aria-current="page" href="#orderForm"><button type="button" className="btn btn-dark">Сделать заказ</button></a>
            </div>

            <div className="nav-item">
              <a href="#footer"><button type="button" className="btn btn-dark">Контакты</button></a>
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
      <Modal modalContent={modalContent} />
    </nav>
  );
}
