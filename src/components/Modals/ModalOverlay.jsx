import React from 'react';

function Overlay({ children, isModal, closeModal }) {
  return (
    <section className={`overlay ${isModal && 'overlay_show'}`} onClick={() => closeModal()}>
      {children}
    </section>
  );
}

export default Overlay;
