import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Repairs.css'; // Custom styles
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

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
  const [searchTerm, setSearchTerm] = useState("");
    const filteredUsers = repairs.filter((user) =>
      `${user.id_article} `
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  
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
        <div>
            <div><label>
            ID Article:
            </label>
            </div>
            <div>
            <input
              type="text"
              value={formData.id_article}
              onChange={e => setFormData({ ...formData, id_article: e.target.value })}
              required
            /></div>
          </div>
          <div>
            <div><label>
            Type:
            </label>
            </div>
            <div>
            <input
              type="text"
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
              required
            /></div>
          </div>
          <div>
          <div><label>
            Date de Réparation:
             </label>
             </div>
             <div>
            <input
              type="date"
              value={formData.date_reparation}
              onChange={e => setFormData({ ...formData, date_reparation: e.target.value })}
              required
            /></div>
         </div>
          <div>
            <div><label>
            Cout:
            </label>
            </div>
            <div>
            <input
              type="number"
              value={formData.cout}
              onChange={e => setFormData({ ...formData, cout: e.target.value })}
              required
            /></div>
          </div>
          <div>
            <div><label>
            Fournisseur:
            </label>
            </div>
            <div>
            <input
              type="text"
              value={formData.fornisseur}
              onChange={e => setFormData({ ...formData, fornisseur: e.target.value })}
              required
            /></div>
          </div>
          <div>
          <div><label>
            Facture (optional):
            </label>
            </div>
            <div>
            <input
              type="text"
              value={formData.facture}
              onChange={e => setFormData({ ...formData, facture: e.target.value })}
            />
          </div>
          </div>
         
          <button type="submit">Add Repair</button>
        </form>
        </div>
        <div className="repa-list">
          <h2>Repair List</h2>
          <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ID article ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: "none" }}
          />
          <span className="search-icon"><FaSearch /></span>
        </div>
      </div>
          <table>
            <thead>
              <tr>
                <th>ID Réparation</th>
                <th>ID Article</th>
                <th>Type</th>
                <th>Date de Réparation</th>
                <th>Cout</th>
                <th>Fournisseur</th>
                <th>Facture</th>
                
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(repair => (
                <tr key={repair.id_reparation_art}>
                  <td>{repair.id_reparation_art}</td>
                  <td>{repair.id_article}</td>
                  <td>{repair.type}</td>
                  <td>{repair.date_reparation}</td>
                  <td>{repair.cout}</td>
                  <td>{repair.fornisseur}</td>
                  <td>{repair.facture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Repairs1;
