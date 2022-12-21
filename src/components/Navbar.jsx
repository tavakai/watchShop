import React from 'react';

export default function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Watch Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/registration">Registration</a>
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
  );
}
