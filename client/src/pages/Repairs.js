import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Repairs.css'; // Custom styles

const Repairs1 = () => {
  const [repairs, setRepairs] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    date_reparation: '',
    cout: '',
    fornisseur: '',
    facture: '',
    id_article: ''
  });

  useEffect(() => {
    fetchRepairs(); // Fetch existing repairs when the component mounts
  }, []);

  const fetchRepairs = () => {
    axios.get('http://localhost:3001/repairs')
      .then(response => setRepairs(response.data))
      .catch(error => console.error('Error fetching repairs:', error));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      axios
        .post("http://localhost:3001/repairs", formData)
        .then((res) => {
          alert("Repair added successfully");
          fetchRepairs();  // Refresh the list of repairs
          setFormData({
            type: '',
            date_reparation: '',
            cout: '',
            fornisseur: '',
            facture: '',
            id_article: ''
          });
        })
        .catch((err) => console.log("Error:", err));
    
  };

  return (
    <div className="repa-management-container">
      
      <div className="repa-management-content">
        <h1>Repair Management</h1>
        <form className="repa-form" onSubmit={handleSubmit}>
          <label>
            Type:
            <input
              type="text"
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
              required
            />
          </label>
          <label>
            Date de Réparation:
            <input
              type="date"
              value={formData.date_reparation}
              onChange={e => setFormData({ ...formData, date_reparation: e.target.value })}
              required
            />
          </label>
          <label>
            Cout:
            <input
              type="number"
              value={formData.cout}
              onChange={e => setFormData({ ...formData, cout: e.target.value })}
              required
            />
          </label>
          <label>
            Fournisseur:
            <input
              type="text"
              value={formData.fornisseur}
              onChange={e => setFormData({ ...formData, fornisseur: e.target.value })}
              required
            />
          </label>
          <label>
            Facture (optional):
            <input
              type="text"
              value={formData.facture}
              onChange={e => setFormData({ ...formData, facture: e.target.value })}
            />
          </label>
          <label>
            ID Article:
            <input
              type="text"
              value={formData.id_article}
              onChange={e => setFormData({ ...formData, id_article: e.target.value })}
              required
            />
          </label>
          <button type="submit">Add Repair</button>
        </form>
        </div>
        <div className="repa-list">
          <h2>Repair List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Date de Réparation</th>
                <th>Cout</th>
                <th>Fournisseur</th>
                <th>Facture</th>
                <th>ID Article</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map(repair => (
                <tr key={repair.id_reparation_art}>
                  <td>{repair.id_reparation_art}</td>
                  <td>{repair.type}</td>
                  <td>{repair.date_reparation}</td>
                  <td>{repair.cout}</td>
                  <td>{repair.fornisseur}</td>
                  <td>{repair.facture}</td>
                  <td>{repair.id_article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Repairs1;
