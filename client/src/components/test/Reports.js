import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    date_gener: '',
    contenu: '',
    format: '',
    id_vehicule: ''
  });

  const addReport = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.date_gener || !formData.contenu || !formData.format || !formData.id_vehicule) {
      return;
    }

    const newReport = {
      id_rapport: Date.now(), // Unique ID using the current timestamp
      ...formData
    };

    setReports([...reports, newReport]);
    setFormData({
      type: '',
      date_gener: '',
      contenu: '',
      format: '',
      id_vehicule: ''
    });
  };

  return (
    <div className="reports-page">
      <h2>Reports</h2>

      {/* Add Report Section */}
      <div className="add-report">
        <h3>Add New Report</h3>
        <form onSubmit={addReport}>
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
            <label>Date de Génération:</label>
            <input
              type="date"
              value={formData.date_gener}
              onChange={(e) => setFormData({ ...formData, date_gener: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Contenu:</label>
            <input
              value={formData.contenu}
              onChange={(e) => setFormData({ ...formData, contenu: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Format:</label>
            <input
              type="text"
              value={formData.format}
              onChange={(e) => setFormData({ ...formData, format: e.target.value })}
              required
            />
          </div>
          <div>
            <label>ID Article:</label>
            <input
              type="text"
              value={formData.id_vehicule}
              onChange={(e) => setFormData({ ...formData, id_vehicule: e.target.value })}
              required
            />
          </div>
          <button type="submit">Add Report</button>
        </form>
      </div>

      {/* Report List Section */}
      <div className="report-list">
        <h3>Report List</h3>
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID Rapport</th>
                <th>Type</th>
                <th>Date de Génération</th>
                <th>Contenu</th>
                <th>Format</th>
                <th>ID Article</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id_rapport}>
                  <td>{report.id_rapport}</td>
                  <td>{report.type}</td>
                  <td>{report.date_gener}</td>
                  <td>{report.contenu}</td>
                  <td>{report.format}</td>
                  <td>{report.id_vehicule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reports;