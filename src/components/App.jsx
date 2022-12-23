import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Modal from './Modals/Modal';
import Navbar from './Navbar';
import Orders from './Orders';

export default function App({ user }) {
  const [adminCards, setAdminCards] = useState([]);

  const [modalContent, setModalContent] = useState('');
  const [orderId, setOrderId] = useState('');
  const handleClickNavBar = (event) => {
    const recipient = event.target.getAttribute('data-bs-whatever');
    if (recipient === 'signUp') {
      setModalContent('signUp');
    } else if (recipient === 'signIn') {
      setModalContent('signIn');
    } else {
      setModalContent('editCard');
    }
  };

  useEffect(() => {
    fetch('/admin/orders')
      .then((res) => res.json())
      .then((data) => setAdminCards(data));
  }, []);

  return (
    <div className="container">
      <Navbar adminCards={adminCards} user={user} handleClickNavBar={handleClickNavBar} />
      <Routes>

        <Route path="/" element={<Main user={user} />} />
        <Route
          path="/admin"
          element={(
            <Orders
              adminCards={adminCards}
              setAdminCards={setAdminCards}
              handleClickNavBar={handleClickNavBar}
              setOrderId={setOrderId}
            />
        )}
        />

      </Routes>
      <Modal modalContent={modalContent} orderId={orderId} />
    </div>
  );
}
