import React from 'react';

function Preloader() {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
}

export default Preloader;
