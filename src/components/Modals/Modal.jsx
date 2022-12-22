import React from 'react';
import EditForm from './Form/EditForm';
import Form from './Form/Form';

function Modal({ modalContent, cardId }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {
            modalContent ? (
              <Form modalContent={modalContent} />
            ) : (
              <EditForm cardId={cardId} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
