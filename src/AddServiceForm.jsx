import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newService = { name, description, price };
    addService(newService);
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="mt-4">Add New Service</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Add Service</button>
      </form>
    </div>
  );
};

export default AddServiceForm;


