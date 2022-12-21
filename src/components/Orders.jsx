import React, { useEffect, useState } from 'react';
import OneCard from './catalog/OneCard';

function Orders(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/admin/orders')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="row">
      {cards.map((el) => <OneCard key={el.id} card={el} />)}
    </div>
  );
}

export default Orders;
