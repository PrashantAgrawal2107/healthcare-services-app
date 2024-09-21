import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({ services, handleDelete }) => {
  return (
    <div className="container">
      <h2 className="mt-4">Healthcare Services</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add New Service</Link>
      <ul className="list-group">
        {services.map((service, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{service.name}</h5>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
            </div>
            <div>
              <Link to={`/update/${index}`} className="btn btn-warning me-2">Update</Link>
              <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;


