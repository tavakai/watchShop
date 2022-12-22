import React, { useState } from 'react';
import api from '../../../utils/api';

function EditForm({ cardId }) {
  const [value, setValue] = useState({
    name: '',
    image: '',
  });

  function handleChange(e) {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e, id) {
    e.preventDefault();
    api.editCard(value, id)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/admin';
        }
      });
  }

  return (
    <div className="modal-body">

      <form onSubmit={(e) => handleSubmit(e, cardId)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Изменить заказ
          </h5>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Название часов
            <input onChange={(e) => handleChange(e)} type="text" value={value.name} name="name" className="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder="Введите имя" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputImage" className="form-label">
            Эскиз часов
            <input onChange={(e) => handleChange(e)} type="text" value={value.image} name="image" className="form-control" id="exampleInputImage" aria-describedby="emailHelp" placeholder="Введите имя" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Изменить
        </button>
      </form>
    </div>
  );
}

export default EditForm;
