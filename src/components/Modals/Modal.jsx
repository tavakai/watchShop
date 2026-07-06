import React from 'react';
import EditForm from './Form/EditForm';
import Form from './Form/Form';

function Modal({ modalContent, orderId }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {
            modalContent === 'signUp' || modalContent === 'signIn' ? (
              <Form modalContent={modalContent} />
            ) : <EditForm modalContent={modalContent} orderId={orderId} />
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
