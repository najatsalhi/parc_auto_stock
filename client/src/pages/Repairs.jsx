/* spell-checker: disable */
import React, { useState } from 'react';
import './Repairs.css';
/* spell-checker: enable */

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    cout: '',
    fournisseur: '',
    facture: '',
    id_Article: ''
  });

  const addRepair = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.date || !formData.cout || !formData.fournisseur || !formData.facture || !formData.id_Article) {
      return;
    }

    const newRepair = {
      Id_Reparation: Date.now(), // Unique ID using the current timestamp
      ...formData
    };

    setRepairs([...repairs, newRepair]);
    setFormData({
      type: '',
      date: '',
      cout: '',
      fournisseur: '',
      facture: '',
      id_Article: ''
    });
  };

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
            <label>Date:</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
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
            <label>ID Article:</label>
            <input
              type="text"
              value={formData.id_Article}
              onChange={(e) => setFormData({ ...formData, id_Article: e.target.value })}
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
                <th>Date</th>
                <th>Coût</th>
                <th>Fournisseur</th>
                <th>Facture</th>
                <th>ID Article</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((repair) => (
                <tr key={repair.Id_Reparation}>
                  <td>{repair.Id_Reparation}</td>
                  <td>{repair.type}</td>
                  <td>{/* spell-checker: disable-line */ repair.fournisseur}</td>
                  <td>{repair.cout}</td>
                  <td>{repair.fournisseur}</td>
                  <td>{repair.facture}</td>
                  <td>{repair.id_Article}</td>
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