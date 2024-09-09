import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";

const Personnel = () => {
  const [Personnel, setPersonnel] = useState([]);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    permie: "",
    date_debut: "",
    date_fin: "",
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
      .get("http://localhost:3001/layout/Personnel")
      .then((res) => setPersonnel(res.data))
      .catch((err) => alert("Personnel errors"));
  };

  function validation(Data) {
    let errors = {};
    if (!Data.nom) {
      errors.nom = "Nom is required";
    } else {
      errors.nom = "";
    }
    if (!Data.prenom) {
      errors.prenom = "Prénom is required";
    } else {
      errors.prenom = "";
    }
    if (!Data.date_debut) {
      errors.date_debut = "Date is required";
    } else {
      errors.date_debut = "";
    }
    if (!Data.telephone) {
      errors.telephone = "Téléphone is required";
    } else {
      errors.telephone = "";
    }
    if (!Data.email){
      errors.email = "Email is required";
    }
    else {
      errors.email = "";
    }
    if (!Data.permie) {
      errors.permie = "Permie is required";
    } else {
      errors.permie = "";
    }
    if (!Data.id_vehicule) {
      errors.id_vehicule = "ID Vehicule is required";
    } else {
      errors.id_vehicule = "";
    }
    return errors;
  }
  const addPersonnel = (e) => {
    e.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (
      err.nom === "" &&
      err.prenom === "" &&
      err.telephone === "" &&
      err.email === "" &&
      err.permie === "" &&
      err.date_debut === "" &&
      err.date_debut === "" &&
      err.id_vehicule === ""
    ) {
      axios
        .post("http://localhost:3001/Layout/Personnel", values)
        .then((res) => {
          alert("Personnel added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    }
  };
  return (
    <div className="personnel-page">
      {/* Add personnel Section */}
      <div className="add-personnel">
        <h3>Ajouter un personnel</h3>
        <form action="" onSubmit={addPersonnel}>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="nom">Nom:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="nom"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="prenom">Prénom:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="prenom"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="telephone">Téléphone:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="tel"
                  name="telephone"
                  onChange={handleChange}
                  
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="email">Email:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="email"
                  onChange={handleChange}
                  name="email"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="permie">Pérmie</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="permie"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="date_debut">Date d'accusation:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="date"
                  name="date_debut"
                  onChange={handleChange}
                  placeholder="YYYY/MM/DD"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="date_fin">Date de récéption:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="date"
                  name="date_fin"
                  onChange={handleChange}
                  placeholder="YYYY/MM/DD"
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
                <input
                  className="inputt"
                  type="number"
                  onChange={handleChange}
                  name="id_vehicule"
                />
              </div>
            </div>
            
          </div>
          <button id="butn4" type="submit">
              Ajouter
            </button>
        </form>
      </div>
      {/* Personnel List Section */}
      <div className="personnel-list">
        <h3>Liste de personnels</h3>
        <table>
          <thead>
            <tr>
              <th>Personnel ID</th>
              <th>Nom</th>
              <th>prenom</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>permie</th>
              <th>Date d'accusation</th>
              <th>Date de récéption:</th>
              <th>Vehicule ID</th>
            </tr>
          </thead>
          <tbody>
            {Personnel.map((personnel) => (
              <tr key={personnel.id_chauffeur}>
                <td>{personnel.id_chauffeur}</td>
                <td>{personnel.nom}</td>
                <td>{personnel.prenom}</td>
                <td>{personnel.telephone}</td>
                <td>{personnel.email}</td>
                <td>{personnel.permie}</td>
                <td>{personnel.date_debut}</td>
                <td>{personnel.date_fin}</td>
                <td>{personnel.id_vehicule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Personnel;
