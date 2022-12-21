import React, { useEffect, useState } from 'react';
import OneCard from './OneCard';

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/catalog/orders')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="row">
      {cards.map((el) => <OneCard key={el.id} card={el} />)}
    </div>
  );
}
