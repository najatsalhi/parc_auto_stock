import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [values, setValues] = useState({
    type: "",
    date_gener: "",
    contenu: "",
    format: "",
    id_vehicule: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = reports.filter((user) =>
    `${user.id_vehicule} `
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  useEffect(() => {
    fetching();
  }, []);

  const fetching = () => {
    axios
      .get("http://localhost:3001/layout/Rapports")
      .then((res) => setReports(res.data))
      .catch((err) => alert("Rapports errors"));
  };

 
  const addReport = (e) => {
    e.preventDefault();
        axios.post("http://localhost:3001/Layout/Rapports", values)
          .then((res) => {
            alert("Report added successfully");
            fetching();    
            setValues({
              type: "",
              date_gener: "",
              contenu: "",
              format: "",
              id_vehicule: "",
            });    
          })
          .catch((err) => alert("errors"));
      
    }
  return (
    <div className="reports-page">

      {/* Add Report Section */}
      <div className="add-report">
        <h3>Ajouter un rapport</h3>
        <form action="" onSubmit={addReport}>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="id_vehicule">ID Vehicule:</label>
              </div>
              <div>
                <input className="inputt"
                  type="number"
                  onChange={handleChange}
                  name="id_vehicule"
                  required
                />
              </div>
            </div>
            </div>
        <div>
            <div className="wrapper">
              <div>
                <label htmlFor="type">Type:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="type"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="date_gener">Date de generation:</label>
              </div>
              <div>
                <input className="inputt"
                  type="date"
                  name="date_gener"
                  onChange={handleChange}
                  placeholder="YYYY/MM/DD"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="contenu">Contenu:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="contenu"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="format">Fournisseur:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="format"
                  required
                />
              </div>
            </div>
          </div>
          
                <button id="butn4" type="submit">Ajouter</button>
        </form>
      </div>
      {/* Report List Section */}
      <div className="report-list">
        <h3>Liste des Rapports</h3>
        <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search vehicule ID..."
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
              <th>Report ID</th>
              <th>Vehicule ID</th>
              <th>Type</th>
              <th>Generation Date</th>
              <th>Contenu</th>
              <th>Format</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((report) => (
                <tr key={report.id_rapport_veh}>
                  <td>{report.id_rapport_veh}</td>
                  <td>{report.id_vehicule}</td>
                  <td>{report.type}</td>
                  <td>{report.date_gener}</td>
                  <td>{report.contenu}</td>
                  <td>{report.format}</td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
