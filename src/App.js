import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceList from './ServiceList';
import AddServiceForm from './AddServiceForm';
import UpdateServiceForm from './UpdateServiceForm';

function App() {
  const [services, setServices] = useState([
    { name: 'General Checkup', description: 'Basic health check', price: 50 },
    { name: 'X-ray', description: 'Bone scan', price: 100 },
  ]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (index, updatedService) => {
    const updatedServices = [...services];
    updatedServices[index] = updatedService;
    setServices(updatedServices);
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ServiceList services={services} handleDelete={handleDelete} />} />
          <Route path="/add" element={<AddServiceForm addService={addService} />} />
          <Route path="/update/:index" element={<UpdateServiceForm services={services} updateService={updateService} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;