// import React, { useState } from 'react';
// import './Reports.css';

// const Reports = () => {
//   const [reports, setReports] = useState([]);
//   const [formData, setFormData] = useState({
//     type: '',
//     date_gener: '',
//     contenu: '',
//     format: '',
//     id_article: ''
//   });

//   const addReport = (e) => {
//     e.preventDefault();
//     if (!formData.type || !formData.date_gener || !formData.contenu || !formData.format || !formData.id_article) {
//       return;
//     }

//     const newReport = {
//       id_rapport: Date.now(), // Unique ID using the current timestamp
//       ...formData
//     };

//     setReports([...reports, newReport]);
//     setFormData({
//       type: '',
//       date_gener: '',
//       contenu: '',
//       format: '',
//       id_article: ''
//     });
//   };

//   return (
//     <div className="reports-page">
//       <h2>Reports</h2>

//       {/* Add Report Section */}
//       <div className="add-report">
//         <h3>Add New Report</h3>
//         <form onSubmit={addReport}>
//           <div>
//             <label>Type:</label>
//             <input
//               type="text"
//               value={formData.type}
//               onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>Date de Génération:</label>
//             <input
//               type="date"
//               value={formData.date_gener}
//               onChange={(e) => setFormData({ ...formData, date_gener: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>Contenu:</label>
//             <input
//               value={formData.contenu}
//               onChange={(e) => setFormData({ ...formData, contenu: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>Format:</label>
//             <input
//               type="text"
//               value={formData.format}
//               onChange={(e) => setFormData({ ...formData, format: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>ID Article:</label>
//             <input
//               type="text"
//               value={formData.id_article}
//               onChange={(e) => setFormData({ ...formData, id_article: e.target.value })}
//               required
//             />
//           </div>
//           <button type="submit">Add Report</button>
//         </form>
//       </div>

//       {/* Report List Section */}
//       <div className="report-list">
//         <h3>Report List</h3>
//         {reports.length === 0 ? (
//           <p>No reports available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>ID Rapport</th>
//                 <th>Type</th>
//                 <th>Date de Génération</th>
//                 <th>Contenu</th>
//                 <th>Format</th>
//                 <th>ID Article</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((report) => (
//                 <tr key={report.id_rapport}>
//                   <td>{report.id_rapport}</td>
//                   <td>{report.type}</td>
//                   <td>{report.date_gener}</td>
//                   <td>{report.contenu}</td>
//                   <td>{report.format}</td>
//                   <td>{report.id_article}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reports;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reports.css';

const Reports1 = () => {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    date: '',
    type: ''
  });

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    axios.get('http://localhost:3001/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  };

  const addReport = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/reports', formData)
      .then(() => {
        alert("Report added successfully");
        fetchReports();  // Refresh report list after adding a new report
        setFormData({
          nom: '',
          description: '',
          date: '',
          type: ''
        });
      })
      .catch(error => console.error('Error adding report:', error));
  };

  return (
    <div className="reports-page">
      <h2>Reports</h2>

      {/* Add Report Section */}
      <div className="add-report">
        <h3>Add New Report</h3>
        <form onSubmit={addReport}>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
            <label>Type:</label>
            <input
              type="text"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
