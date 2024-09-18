import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reports.css";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons


const Reports1 = () => {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    format: "",
    id_article: '',
    contenu: "",
    date_gener: "",
    type: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = reports.filter((user) =>
    `${user.id_article} `
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    axios
      .get("http://localhost:3001/reports")
      .then((response) => setReports(response.data))
      .catch((error) => console.error("Error fetching reports:", error));
  };

  const addReport = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/reports", formData)
      .then(() => {
        alert("Report added successfully");
        fetchReports(); // Refresh report list after adding a new report
        setFormData({
          id_article: '',
          format: "",
          contenu: "",
          date_gener: "",
          type: "",
        });
      })
      .catch((error) => console.error("Error adding report:", error));
  };


  return (
    <div className="repor-page">
      {/* Add Report Section */}
      <div className="add-repor">
        <h1>Add New Report</h1>
        <form className="repor-form" onSubmit={addReport}>
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
          <div>
          <label>
            Format:
          </label>
          </div>
            <div>
            <input
              type="text"
              value={formData.format}
              onChange={(e) =>
                setFormData({ ...formData, format: e.target.value })
              }
              required
            />
            </div>
          </div>

          <div>
          <div>
          <label>
            Contenu:
          </label>
          </div>
            <div>
            <input
              type="text"
              value={formData.contenu}
              onChange={(e) =>
                setFormData({ ...formData, contenu: e.target.value })
              }
              required
            />
            </div>
          </div>

          <div>
          <div>
          <label>
            Date de generation:
          </label>
          </div>
            <div>
            <input
              type="date"
              value={formData.date_gener}
              onChange={(e) =>
                setFormData({ ...formData, date_gener: e.target.value })
              }
              required
            />
            </div>
          </div>

          <div>
          <div>
          <label>
            Type:
          </label>
          </div>
            <div>
            <input
              type="text"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              required
            />
            </div>
          </div>
          <button  type="submit">
            Add Report
          </button>
        </form>
      </div>

      {/* Report List Section */}
      <div className="repor-list">
        <h3>Report List</h3>
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
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID Rapport</th>
                <th>ID Article</th>
                <th>Format</th>
                <th>Type</th>
                <th>Date de generation</th>
                <th>Contenu</th>
                
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((report) => (
                <tr key={report.id_rapport_art}>
                  <td>{report.id_rapport_art}</td>
                  <td>{report.id_article}</td>
                  <td>{report.format}</td>
                  <td>{report.type}</td>
                  <td>{report.date_gener}</td>
                  <td>{report.contenu}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reports1;
