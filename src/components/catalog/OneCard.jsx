import React from 'react';

export default function OneCard({ card }) {
  return (
    <div id="uno" className="card" style={{ width: '15rem', margin: '15px', padding: '15px' }}>
      <img src={card.image} className="card-img-top" alt="watches" />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: 'center' }}>{card.name}</h5>
      </div>
    </div>
  );
}
