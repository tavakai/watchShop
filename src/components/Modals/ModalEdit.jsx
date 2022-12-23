import React from 'react';
import EditForm from './Form/EditForm';

function ModalEdit({ cardId }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <EditForm cardId={cardId} />
        </div>
      </div>
    </div>
  );
}

export default ModalEdit;
