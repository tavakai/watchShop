import React from 'react';

export default function OneCard({ card }) {
  return (
    <div
      id="uno"
      className="card"
      style={{
        width: '18rem', margin: '15px', padding: '15px', textAlign: 'center',
      }}
    >
      <img src={card.image} className="card-img-top" alt="watches" />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        {!card.status
          ? (
            <div className="buttons">
              <button type="submit" className="btn btn-outline-warning">Изменить</button>
              <button type="submit" className="btn btn-outline-success">Выполнено</button>
            </div>
          ) : null}
      </div>
    </div>
  );
}
