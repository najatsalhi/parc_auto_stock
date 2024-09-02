/* spell-checker: disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Repairs.css';
/* spell-checker: enable */

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);
  const [formData, setFormData] = useState({
    id_reparation: '',
    type: '',
    date_reparation: '',
    cout: '',
    fournisseur: '',
    facture: '',
    id_vehicule: ''
  });
  const addRepair = (e) => {
    e.preventDefault();
    if (formData.type || formData.date_reparation || formData.cout || formData.fournisseur || formData.facture || formData.id_vehicule) {
      
    axios.post("http://localhost:3001/layout/Reparation", formData)
        .then(() => {
          alert("Report added successfully");
          setFormData({
            type: '',
            date_reparation: '',
            cout: '', // spell-checker: disable-line
            fournisseur: '', // spell-checker: disable-line
            facture: '',
            id_vehicule: ''
          });
          fetching();
        })
        .catch((err) => console.log(err));
  }
}
  const fetching = () => {
    // Fetch the reports from the database
    axios.get("http://localhost:3001/layout/Reparation")
      .then((res) => {
        setRepairs(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetching(); // Fetch reports on component mount
  }, []);
  
  return (
    <div className="repairs-page">
      <h2>Repairs</h2>

      {/* Add Repair Section */}
      <div className="add-repair">
        <h3>Add New Repair</h3>
        <form onSubmit={addRepair}>
          <div>
            <label>Type:</label>
            <input
              type="text"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            />
          </div>
          <div>
            <label>date_reparation:</label>
            <input
              type="text"
              value={formData.date_reparation}
              onChange={(e) => setFormData({ ...formData, date_reparation: e.target.value })}
              required
              placeholder='YYYY/MM/DD'
            />
          </div>
          <div>
            <label>Coût:</label>
            <input
              type="text"
              value={formData.cout}
              onChange={(e) => setFormData({ ...formData, cout: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Fournisseur:</label>
            <input
              type="text"
              value={formData.fournisseur}
              onChange={(e) => setFormData({ ...formData, fournisseur: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Facture:</label>
            <input
              type="text"
              value={formData.facture}
              onChange={(e) => setFormData({ ...formData, facture: e.target.value })}
              required
            />
          </div>
          <div>
            <label>ID Vehicule:</label>
            <input
              type="text"
              value={formData.id_vehicule}
              onChange={(e) => setFormData({ ...formData, id_vehicule: e.target.value })}
              required
            />
          </div>
          <button type="submit">Add Repair</button>
        </form>
      </div>

      {/* Repair List Section */}
      <div className="repair-list">
        <h3>Repair List</h3>
        {repairs.length === 0 ? (
          <p>No repairs available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID Réparation</th>
                <th>Type</th>
                <th>date_reparation</th>
                <th>Coût</th>
                <th>Fournisseur</th>
                <th>Facture</th>
                <th>ID Vehicule</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((repair) => (
                <tr key={repair.id_reparation}>
                  <td>{repair.id_reparation}</td>
                  <td>{repair.type}</td>
                  <td>{repair.fournisseur}</td>
                  <td>{repair.cout}</td>
                  <td>{repair.fournisseur}</td>
                  <td>{repair.facture}</td>
                  <td>{repair.id_vehicule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Repairs;