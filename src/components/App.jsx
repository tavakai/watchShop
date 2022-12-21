import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';
import Orders from './Orders';

export default function App({ user }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Orders />} />
      </Routes>
    </div>
  );
}
