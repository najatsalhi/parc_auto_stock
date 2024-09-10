import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Repairs.css'; // Custom styles

const Repairs1 = () => {
  const [repairs, setRepairs] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    date_reparation: '',
    cout: '',
    fournisseur: '',
    facture: '',
    id_article: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchRepairs(); // Fetch existing repairs when the component mounts
  }, []);

  const fetchRepairs = () => {
    axios.get('http://localhost:3001/repairs')
      .then(response => setRepairs(response.data))
      .catch(error => console.error('Error fetching repairs:', error));
  };

  const validation = (data) => {
    let errors = {};

    if (!data.type) errors.type = "Type is required";
    if (!data.date_reparation) errors.date_reparation = "Date de Réparation is required";
    if (!data.cout) errors.cout = "Cout is required";
    if (!data.fournisseur) errors.fournisseur = "Fournisseur is required";
    if (!data.id_article) errors.id_article = "ID Article is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validation(formData);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      axios
        .post("http://localhost:3001/repairs", formData)
        .then((res) => {
          alert("Repair added successfully");
          fetchRepairs();  // Refresh the list of repairs
          setFormData({
            type: '',
            date_reparation: '',
            cout: '',
            fournisseur: '',
            facture: '',
            id_article: ''
          });
        })
        .catch((err) => console.log("Error:", err));
    }
  };

  return (
    <div className="repair-management-container">
      <h1>Repair Management</h1>
      <div className="repair-management-content">
        <form className="repair-form" onSubmit={handleSubmit}>
          <label>
            Type:
            <input
              type="text"
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
              required
            />
            {errors.type && <p className="error">{errors.type}</p>}
          </label>
          <label>
            Date de Réparation:
            <input
              type="date"
              value={formData.date_reparation}
              onChange={e => setFormData({ ...formData, date_reparation: e.target.value })}
              required
            />
            {errors.date_reparation && <p className="error">{errors.date_reparation}</p>}
          </label>
          <label>
            Cout:
            <input
              type="number"
              value={formData.cout}
              onChange={e => setFormData({ ...formData, cout: e.target.value })}
              required
            />
            {errors.cout && <p className="error">{errors.cout}</p>}
          </label>
          <label>
            Fournisseur:
            <input
              type="text"
              value={formData.fournisseur}
              onChange={e => setFormData({ ...formData, fournisseur: e.target.value })}
              required
            />
            {errors.fournisseur && <p className="error">{errors.fournisseur}</p>}
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
            {errors.id_article && <p className="error">{errors.id_article}</p>}
          </label>
          <button type="submit">Add Repair</button>
        </form>

        <div className="repair-list">
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
                <tr key={repair.id_reparation}>
                  <td>{repair.id_reparation}</td>
                  <td>{repair.type}</td>
                  <td>{repair.date_reparation}</td>
                  <td>{repair.cout}</td>
                  <td>{repair.fournisseur}</td>
                  <td>{repair.facture}</td>
                  <td>{repair.id_article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Repairs1;
