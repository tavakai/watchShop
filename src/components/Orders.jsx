import React, { useEffect, useState } from 'react';
import OneCard from './catalog/OneCard';

function Orders({ adminCards, setAdminCards }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/admin/orders')
      .then((res) => res.json())
      .then((data) => {
        setAdminCards(data);
        setCards(data);
      });
  }, []);

  const completeHandler = async (id) => {
    await fetch(`/admin/complete/${id}`)
      .then(() => setCards((prev) => prev.filter((el) => el.id !== id)));
  };

  const deleteHandler = async (id) => {
    await fetch(`/admin/delete/${id}`, { method: 'DELETE' })
      .then(() => setCards((prev) => prev.filter((el) => el.id !== id)));
  };

  return (
    <div className="row">

      {cards?.map((el) => <OneCard key={el.id} card={el} completeHandler={completeHandler} deleteHandler={deleteHandler} />)}

    </div>
  );
}

export default Orders;
