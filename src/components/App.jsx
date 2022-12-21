import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Registration from './auth/Registration';
import Navbar from './Navbar';

export default function App({ user }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}
