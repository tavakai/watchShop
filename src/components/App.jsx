import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';
import Orders from './Orders';

export default function App({ user }) {
  const [adminCards, setAdminCards] = useState([]);

  useEffect(() => {
    fetch('/admin/orders')
      .then((res) => res.json())
      .then((data) => setAdminCards(data));
  }, []);

  return (
    <div className="container">
      <Navbar adminCards={adminCards} user={user} />
      <Routes>

        <Route path="/" element={<Main user={user} />} />
        <Route path="/admin" element={<Orders adminCards={adminCards} setAdminCards={setAdminCards} />} />

      </Routes>
    </div>
  );
}
