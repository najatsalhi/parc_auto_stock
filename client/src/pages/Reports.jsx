import React, { useState } from "react";
import "./Reports.css";
import axios from "axios";
import validation from "./validation";


const Reports = () => {
  const [reports, setReports] = useState([]);
  const [Data, setData] = useState({
    id_rapport_veh:"",
    type: "",
    date_gener: "",
    contenu: "",
    format: "",
    id_vehicule: "",
  });
  const [errors, setErrors] = useState({});
  const addReport = (e) => {
    e.preventDefault();
    const err = validation(Data);
    setErrors(err);
    if (
      errors.type === "" &&
      errors.date_gener === "" &&
      errors.contenu === "" &&
      errors.format === "" &&
      errors.id_rapport_veh === ""
    ) {
      axios.post("http://localhost:3001/Reports", Data)
        .then((res) => {
          alert("success");
        })
        .catch((err) => console.log(err));
        axios.get("http://localhost:3001/Reports", { params: Data })
        .then((res) => {
          setReports(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  
  // function fetching() {
  //   //actualiser reports from database
  //   axios.get("http://localhost:3001/Reports", { params: Data })
  //     .then((res) => {
  //       setReports(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }
  
  // useEffect(() => {
  //   fetching(); // Fetch users on component mount
  // }, []);

 
  

  setData({
    type: "",
    date_gener: "",
    contenu: "",
    format: "",
    id_rapport_veh: "",
  });

  return (
    <div className="reports-page">
      <h2>Reports</h2>

      {/* Add Report Section */}
      <div className="add-report">
        <h3>Add New Report</h3>
        <form onSubmit={ addReport}>
          <div>
            <label>Type:</label>
            <input
              type="text"
              value={Data.type}
              onChange={(e) => setData({ ...Data, type: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Generation Date:</label>
            <input
              type="date"
              value={Data.date_gener}
              onChange={(e) =>
                setData({ ...Data, date_gener: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>contenu:</label>
            <input
              value={Data.contenu}
              onChange={(e) => setData({ ...Data, contenu: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Format:</label>
            <input
              type="text"
              value={Data.format}
              onChange={(e) => setData({ ...Data, format: e.target.value })}
              required
            />
          </div>
          <div>
            <label>ID Vehicule :</label>
            <input
              type="number"
              value={Data.id_rapport_veh}
              onChange={(e) => setData({ ...Data, id_rapport_veh: e.target.value })}
              required
            />
          </div>
          <button type="submit">Add Report</button>
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
                <th>contenu</th>
                <th>Format</th>
                <th>Vehicule ID </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id_rapport_veh}>
                  <td>{report.id_rapport_veh}</td>
                  <td>{report.type}</td>
                  <td>{report.date_gener}</td>
                  <td>{report.contenu}</td>
                  <td>{report.format}</td>
                  <td>{report.id_rapport_veh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    </div>
  );
};

export default Reports;
