import React, { useEffect, useState } from 'react';
import OneCard from './catalog/OneCard';
import Modal from './Modals/Modal';
import ModalEdit from './Modals/ModalEdit';

function Orders({ setAdminCards, handleClickNavBar, setOrderId }) {
  const [cards, setCards] = useState([]);
  const [editModals, setEditModals] = useState('');

  useEffect(() => {
    fetch('/admin/orders')
      .then((res) => res.json())
      .then((data) => {
        setAdminCards(data);
        setCards(data);
      });
  }, []);

  // const editHandleClick = (event) => {
  //   const recipient = event.target.getAttribute('data-bs-whatever');
  //   if (recipient === 'editCard') setEditModals('editCard');
  // };

  const completeHandler = async (id) => {
    await fetch(`/admin/complete/${id}`)
      .then(() => {
        setCards((prev) => prev.filter((el) => el.id !== id));
        setAdminCards((prev) => prev.filter((el) => el.id !== id));
      });
  };

  const deleteHandler = async (id) => {
    await fetch(`/admin/delete/${id}`, { method: 'DELETE' })
      .then(() => setCards((prev) => prev.filter((el) => el.id !== id)));
  };

  return (
    <div className="row">

      {cards?.map((el) => (
        <OneCard
          key={el.id}
          card={el}
          completeHandler={completeHandler}
          deleteHandler={deleteHandler}
          editHandleClick={handleClickNavBar}
          setOrderId={setOrderId}
        />
      ))}
      <div>
        {/* <Modal modalContent={} /> */}
      </div>
    </div>
  );
}

export default Orders;
