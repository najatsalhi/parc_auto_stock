import React, { useState, useEffect } from "react";
import "./Reports.css";
import axios from "axios";
import validation from "./validation";

const Reports = () => {
  const [reports, setReports] = useState([]);

  const [Data, setData] = useState({
    id_rapport_veh: "",
    type: "",
    date_gener: "",
    contenu: "",
    format: "",
    id_vehicule: "",
  });
  const setErrors = useState({})[1];

  const addReport = (e) => {
    e.preventDefault();
    const err = validation(Data);
    setErrors(err);
    if (
      err.type === "" &&
      err.date_gener === "" &&
      err.contenu === "" &&
      err.format === "" &&
      err.id_vehicule === ""
    ) {
    
        axios.post("http://localhost:3001/Layout/Reports", Data)
          .then((res) => {
            alert("Report added successfully");        
          })
          .catch((err) => console.log(err));
      axios.get("http://localhost:3001/layout/Reports",reports)
      .then((res) => {
        setReports(res.data);
      })
      .catch((err) => console.log(err));
    }
  }

  return (
    <div className="reports-page">
      <h2>Reports</h2>

      {/* Add Report Section */}
      <div className="add-report">
        <h3>Add New Report</h3>
        <form onSubmit={addReport}>
          <table>
            <tr>
              <td>
                {" "}
                <label>Type:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={Data.type}
                  onChange={(e) => setData({ ...Data, type: e.target.value })}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Generation Date:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={Data.date_gener}
                  onChange={(e) =>
                    setData({ ...Data, date_gener: e.target.value })
                  }
                  required
                  placeholder="YYYY/MM/DD"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Contenu:</label>
              </td>
              <td>
                <input
                  value={Data.contenu}
                  onChange={(e) =>
                    setData({ ...Data, contenu: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Format:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={Data.format}
                  onChange={(e) => setData({ ...Data, format: e.target.value })}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>ID Vehicule:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={Data.id_vehicule}
                  onChange={(e) =>
                    setData({ ...Data, id_vehicule: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Add Report</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      {/* Report List Section */}
      <div className="report-list">
        <h3>Report List</h3>
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Type</th>
              <th>Generation Date</th>
              <th>Contenu</th>
              <th>Format</th>
              <th>Vehicule ID</th>
            </tr>
          </thead>
          <tbody>
            {
              reports.map((report) => (
                <tr key={report.id_rapport_veh}>
                  <td>{report.id_rapport_veh}</td>
                  <td>{report.type}</td>
                  <td>{report.date_gener}</td>
                  <td>{report.contenu}</td>
                  <td>{report.format}</td>
                  <td>{report.id_vehicule}</td>
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
