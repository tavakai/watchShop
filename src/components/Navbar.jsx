import React, { useState } from 'react';
import Modal from './Modals/Modal';

export default function Navbar({ user, adminCards }) {

  const adminButton = () => {
    fetch('/admin')
      .then(() => {
        window.location.href = '/admin';
      });
  };

  return (
    <>

      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-logo" href="/">
            <img id="logo" src="../img/logo3.png" alt="watch-logo" width="50%" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <div className="menu">
              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="/"><button type="button" className="btn btn-dark">Домой</button></a>
              </div>

              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="#catalog"><button type="button" className="btn btn-dark">Каталог</button></a>
              </div>

              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="#shopDescription"><button type="button" className="btn btn-dark">О нас</button></a>
              </div>

              <div className="nav-item">
                <a className="scroll-to" aria-current="page" href="#orderForm"><button type="button" className="btn btn-dark">Сделать заказ</button></a>
              </div>

              <div className="nav-item">
                <a href="#footer"><button type="button" className="btn btn-dark">Контакты</button></a>
              </div>
              <ul className="navbar-nav nav-item">
                {user?.isAdmin && (
                <div>
                  <button type="button" onClick={(e) => adminButton(e)} className="btn position-relative btn-dark orders-margin">
                    Заказы
                    {adminCards.length ? (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {adminCards.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    ) : null }

                  </button>
                </div>
                )}

              </ul>
            </div>
            <ul className="navbar-nav nav-item">
              {!user ? (
                <>
                  <li className="nav-item">
                    <button onClick={(event) => handleClickNavBar(event)} type="button" className="btn btn-primary btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="signUp">signUp</button>
                  </li>
                  <li className="nav-item">
                    <button onClick={(event) => handleClickNavBar(event)} type="button" className="btn btn-primary btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="signIn">signIn</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <div className="font-monospace fs-3">{user.name}</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/auth/logout"><button type="button" className="btn btn-dark">Logout</button></a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
