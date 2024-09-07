import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Recharge = () => {
  const [recharge, setRecharge] = useState([]);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    type: "",
    date_recharge: "",
    cout: "",
    quantite: "",
    fournisseur: "",
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
      .get("http://localhost:3001/layout/Recharge")
      .then((res) => setRecharge(res.data))
      .catch((err) => alert("Recharge errors"));
  };

  function validation(Data) {
    let errors = {};
    if (!Data.type) {
      errors.type = "Type is required";
    } else {
      errors.type = "";
    }
    if (!Data.date_recharge) {
      errors.date_recharge = "Date is required";
    } else {
      errors.date_recharge = "";
    }
    if (!Data.cout) {
      errors.cout = "Cout is required";
    } else {
      errors.cout = "";
    }
    if (!Data.quantite) {
      errors.quantite = "Quantite is required";
      } else {
        errors.quantite = "";
        }
    if (!Data.fournisseur) {
      errors.fournisseur = "Fournisseur is required";
    } else {
      errors.fournisseur = "";
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

  const addRecharge = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (
      err.type === "" &&
      err.date_recharge === "" &&
      err.cout === "" &&
      err.quantite === "" &&
      err.fournisseur === "" &&
      err.facture === "" &&
      err.id_vehicule === ""
    ) {
      axios
        .post("http://localhost:3001/layout/Recharge", values)
        .then((res) => {
          alert("Recharge added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    }
  };

  return (
    <div className="recharge-page">
      
      {/* Add Recharge Section */}
      <div className="add-recharge ">
        <h3>Ajouter un recharge </h3>
        <form action="" onSubmit={addRecharge}>
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
                <label htmlFor="date_recharge">Date de Recharge:</label>
              </div>
              <div>
                <input className="inputt"
                  type="date"
                  name="date_recharge"
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
                <label htmlFor="quantite">Quantite:</label>
              </div>
              <div>
                <input className="inputt"
                  type="number"
                  onChange={handleChange}
                  name="quantite"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="fournisseur">Fournisseur:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="fournisseur"
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
            <button id="butn5" type="submit">
              <span className="bet">Add Recharge</span>
            </button>
          
        </form>
      </div>

      {/* Recharge List Section */}
      <div className="recharge-list">
        <h3>Recharge List</h3>
        <table>
          <thead>
            <tr>
              <th>ID Recharge</th>
              <th>Type</th>
              <th>date_recharge</th>
              <th>Coût</th>
              <th>Quantite</th>
              <th>Fournisseur</th>
              <th>Facture</th>
              <th>ID Vehicule</th>
            </tr>
          </thead>
          <tbody>
            {recharge.map((recharge) => (
              <tr key={recharge.id_recharge_carb}>
                <td>{recharge.id_recharge_carb}</td>
                <td>{recharge.type}</td>
                <td>{recharge.date_recharge}</td>
                <td>{recharge.cout}</td>
                <td>{recharge.quantite}</td>
                <td>{recharge.fournisseur}</td>
                <td>{recharge.facture}</td>
                <td>{recharge.id_vehicule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Recharge;
