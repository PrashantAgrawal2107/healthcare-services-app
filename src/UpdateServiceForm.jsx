import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateServiceForm = ({ services, updateService }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const service = services[index];
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setPrice(service.price);
    }
  }, [index, services]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(index, { name, description, price });
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="mt-4">Update Service</h2>
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
        <button type="submit" className="btn btn-success">Update Service</button>
      </form>
    </div>
  );
};

export default UpdateServiceForm;

