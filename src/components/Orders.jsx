import React, { useEffect, useState } from 'react';
import OneCard from './catalog/OneCard';

function Orders({ adminCards, setAdminCards }) {
  // const [adminCards, setAdminCards] = useState([]);

  useEffect(() => {
    fetch('/admin/orders')
      .then((res) => res.json())
      .then((data) => setAdminCards(data));
  }, []);
  return (
    <div className="row">
      {adminCards.map((el) => <OneCard key={el.id} card={el} />)}
    </div>
  );
}

export default Orders;
