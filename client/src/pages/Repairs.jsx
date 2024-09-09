import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);
  const setErrors = useState([]);
  const [values, setValues] = useState({
    type: "",
    date_reparation: "",
    cout: "",
    fornisseur: "",
    facture: "",
    id_vehicule: "",
  });

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
      .get("http://localhost:3001/layout/Reparation")
      .then((res) => setRepairs(res.data))
      .catch((err) => alert("Repairs errors"));
  };

  function validation(Data) {
    let errors = {};
    if (!Data.type) {
      errors.type = "Type is required";
    } else {
      errors.type = "";
    }
    if (!Data.date_reparation) {
      errors.date_reparation = "Date is required";
    } else {
      errors.date_reparation = "";
    }
    if (!Data.cout) {
      errors.cout = "Cout is required";
    } else {
      errors.cout = "";
    }
    if (!Data.fornisseur) {
      errors.fornisseur = "Fournisseur is required";
    } else {
      errors.fornisseur = "";
    }
    if (!Data.facture) {
      errors.facture = "Facture is required";
    } else {
      errors.facture = "";
    }
    if (!Data.id_vehicule) {
      errors.id_vehicule = "ID Vehicule is required";
    } else {
      errors.id_vehicule = "";
    }
    return errors;
  }

  const addRepair = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (
      err.type === "" &&
      err.date_reparation === "" &&
      err.cout === "" &&
      err.fornisseur === "" &&
      err.facture === "" &&
      err.id_vehicule === ""
    ) {
      axios
        .post("http://localhost:3001/layout/Reparation", values)
        .then((res) => {
          alert("Repairs added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    }
  };

  return (
    <div className="repairs-page">

      {/* Add Repair Section */}
      <div className="add-repair ">
        <h3>Ajouter une réparation</h3>
        <form action="" onSubmit={addRepair}>
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
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="date_reparation">Date de reparation:</label>
              </div>
              <div>
                <input className="inputt"
                  type="date"
                  name="date_reparation"
                  onChange={handleChange}
                  placeholder="YYYY/MM/DD"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="cout">Coût:</label>
              </div>
              <div>
                <input className="inputt"
                  type="number"
                  onChange={handleChange}
                  name="cout"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="fornisseur">Fournisseur:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="fornisseur"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="facture">Facture:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="facture"
                />
              </div>
            </div>
          </div>
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
                />
              </div>
            </div>
          </div>
            <button id="butn3" type="submit">
              <span className="bet">Ajouter</span>
            </button>
          
        </form>
      </div>

      {/* Repair List Section */}
      <div className="repair-list">
        <h3>Liste des réparations</h3>
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
              <tr key={repair.id_reparation_veh}>
                <td>{repair.id_reparation_veh}</td>
                <td>{repair.type}</td>
                <td>{repair.date_reparation}</td>
                <td>{repair.cout}</td>
                <td>{repair.fornisseur}</td>
                <td>{repair.facture}</td>
                <td>{repair.id_vehicule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Repairs;
