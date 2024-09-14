import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../index.css";
import "./Reports.css";

const Reports1 = () => {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    date: "",
    type: "",
  });

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
          nom: "",
          description: "",
          date: "",
          type: "",
        });
      })
      .catch((error) => console.error("Error adding report:", error));
  };

  return (
    <div className="repor-page">
      {/* Add Report Section */}
      <div className="add-repor">
        <h3>Add New Report</h3>
        <form className="repor-form" onSubmit={addReport}>
          <div>
            <div className="wrapper">
              <div>
                <label>Nom:</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                  required
                  
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label>Type:</label>
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
          </div>
          <button className="butn3" type="submit">
            Add Report
          </button>
        </form>
      </div>

      {/* Report List Section */}
      <div className="repor-list">
        <h3>Report List</h3>
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID Report</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Date</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id_report}>
                  <td>{report.id_report}</td>
                  <td>{report.nom}</td>
                  <td>{report.description}</td>
                  <td>{report.date}</td>
                  <td>{report.type}</td>
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
