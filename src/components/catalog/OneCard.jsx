import React from 'react';

export default function OneCard({ card, deleteHandler, completeHandler }) {
  return (
    <div
      className="card"
      style={{
        width: '18rem', margin: '15px', padding: '15px', textAlign: 'center',
      }}
    >
      {/* Сделать для этой кнопки проверку на админа */}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => deleteHandler(card.id)}
      />
      {/* Сделать для этой кнопки проверку на админа */}

      <img src={card.image} className="card-img-top" alt="watches" />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        {!card.status
          ? (
            <div className="buttons btn-group" role="group" aria-label="Basic outlined example">
              <button type="submit" className="btn btn-outline-warning">Изменить</button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => completeHandler(card.id)}
              >
                Выполнено

              </button>
            </div>
          ) : null}
      </div>
    </div>
  );
}
