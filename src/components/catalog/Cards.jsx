import React, { useEffect, useState } from 'react';
import Modal from '../Modals/Modal';
import OneCard from './OneCard';

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState('');

  useEffect(() => {
    fetch('/catalog/watches')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const deleteHandler = async (id) => {
    await fetch(`/admin/delete/${id}`, { method: 'DELETE' })
      .then(() => setCards((prev) => prev.filter((el) => el.id !== id)));
  };

  return (
    <>
      <div id="catalog" className="row">
        {cards?.map((el) => <OneCard key={el.id} card={el} deleteHandler={deleteHandler} setCardId={setCardId} />)}
      </div>
      <div>
        <Modal cardId={cardId} />
      </div>
    </>
  );
}
