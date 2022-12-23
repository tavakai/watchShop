import React from 'react';
import Form from './Form/Form';

function Modal({ modalContent }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {
            modalContent === 'signUp' || modalContent === 'signIn' ? (
              <Form modalContent={modalContent} />
            ) : null
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
