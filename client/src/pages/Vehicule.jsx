import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";

const Vehicule = () => {
  const [vehicule, setVehicule] = useState([]);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    marque: "",
    modele: "",
    etat: "",
    couleur: "",
    kilometrage: "",
    type_carburant: "",
    num_immatriculation: "",
    carte_grise: "",
    assurance: "",
    vignette: "",
    visite_technique: "",
    visite_technique_date: "",
    vignette_date: "",
    assurance_date: "",
    
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
      .get("http://localhost:3001/layout/Vehicules")
      .then((res) => setVehicule(res.data))
      .catch((err) => alert("Vehicule errors"));
  };

  function validation(Data) {
    let errors = {};
    if (!Data.marque) {
      errors.marque = "marque est obligatoire";
    }else{
      errors.marque = "";
    }
    if (!Data.modele) {
      errors.modele = "modele est obligatoire";
    }else{
      errors.modele = "";
    }
    if (!Data.etat) {
      errors.etat = "etat est obligatoire";
    }
    else{
      errors.etat = "";
    }
    if (!Data.kilometrage) {
      errors.kilometrage = "kilometrage est obligatoire";
    }
    else{
      errors.kilometrage = "";
    }

    if (!Data.type_carburant) {
      errors.type_carburant = "Type de carburant est obligatoire";
    }
    else{
      errors.type_carburant = "";
    }
    if (!Data.num_immatriculation) {
      errors.num_immatriculation = "num_immatriculation est obligatoire";
    }
    else{ 
      errors.num_immatriculation = "";
    }

    if (!Data.carte_grise) {
      errors.carte_grise = "carte_grise est obligatoire";
    }
    else{
      errors.carte_grise = "";
    }
    if (!Data.assurance) {
      errors.assurance = "assurance est obligatoire";
    }
    else{
      errors.assurance = "";
    }
    if (!Data.vignette) {
      errors.vignette = "vignette est obligatoire";
    }else{
      errors.vignette = "";
    }
    if (!Data.visite_technique) {
      errors.visite_technique = "visite_technique est obligatoire";
    }else{
      errors.visite_technique = "";
    }
    return errors;
  }
  const addVehicule = (e) => {
    e.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (
      err.type_carburant === "" &&
      err.marque === "" &&
      err.modele === "" &&
      err.etat === "" &&
      err.kilometrage === "" &&
      err.num_immatriculation === "" &&
      err.carte_grise === "" &&
      err.assurance === "" &&
      err.vignette === "" &&
      err.visite_technique === "" 
    ) {
      axios
        .post("http://localhost:3001/Layout/Vehicules", values)
        .then((res) => {
          alert("Vehicule added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    }
  };
  return (
    <div className="vehicule-page">
      {/* Add Vehicule Section */}
      <div className="add-vehicule">
        <h3>Ajouter un vehicule</h3>
        <form action="" onSubmit={addVehicule}>
            <div>
            <div className="wrapper">
              <div>
                <label htmlFor="marque">Marque:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="marque"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="modele">Modele:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="modele"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="etat">Etat:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="etat"
                />
              </div>
              </div>
            </div>
            <div>
            <div className="wrapper">
              <div>
                <label htmlFor="couleur">Couleur:</label>
              </div>
              <div>
                <input
                  className="inputt-color"
                  type="color"
                  onChange={handleChange}
                  name="couleur"
                />
              </div>
            </div>
            </div>
            <div>
              <div className="wrapper">
                <div>
                  <label htmlFor="kilometrage">Kilometrage:</label>
                </div>
                <div>
                  <input
                    className="inputt"
                    type="number"
                    onChange={handleChange}
                    name="kilometrage"
                  />
                </div>
              </div>
            </div>
            <div>
            <div className="wrapper">
              <div>
                <label htmlFor="type_carburant">Type de carburant:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="type_carburant"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="num_immatriculation">Numero d'immatriculation:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="number"
                  onChange={handleChange}
                  name="num_immatriculation"
                />
              </div>
              </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="carte_grise">Carte Grise:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="carte_grise"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="assurance">Assurance:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="assurance"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="assurance_date">Date de assurance:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="date"
                  onChange={handleChange}
                  name="assurance_date"
                  placeholder="YYYY/MM/DD"
                />
              </div>
              </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="vignette">Vignette:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="vignette"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="vignette_date">Date de vignette:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="date"
                  onChange={handleChange}
                  name="vignette_date"
                  placeholder="YYYY/MM/DD"
                />
              </div>
              </div>
          </div>

          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="visite_technique">Visite Technique:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="visite_technique"
                />
              </div>
              </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="visite_technique_date">Date de visite technique:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="date"
                  onChange={handleChange}
                  name="visite_technique_date"
                  placeholder="YYYY/MM/DD"
                />
              </div>
              </div>
          </div>


            <button id="butn4" type="submit">
              Ajouter
            </button>
        </form>
      </div>
      {/* Vehicule List Section */}
      <div className="vehicule-list">
        <h3>Liste des Vehicule</h3>
        <table>
          <thead>
            <tr>
              <th>Vehicule ID</th>
              <th>Marque</th>
              <th>Modéle</th>
              <th>Etat</th>
              <th>Couleur</th>
              <th>kilometrage</th>
              <th>Type de carburant</th>
              <th>Numero d'immatriculation</th>
              <th>Carte Grise</th>
              <th>Assurance</th>
              <th>Date de assurance</th>
              <th>Vignette</th>
              <th>Date de vignette</th>
              <th>Visite Technique</th>
              <th>Date de visite technique</th>


            </tr>
          </thead>
          <tbody>
            {vehicule.map((vehicule) => (
              <tr key={vehicule.id_vehicule}>
                <td>{vehicule.id_vehicule}</td>
                <td>{vehicule.marque}</td>
                <td>{vehicule.modele}</td>
                <td>{vehicule.etat}</td>
                <td>{vehicule.couleur}</td>
                <td>{vehicule.kilometrage}</td>
                <td>{vehicule.type_carburant}</td>
                <td>{vehicule.num_immatriculation}</td>
                <td>{vehicule.carte_grise}</td>
                <td>{vehicule.assurance}</td>
                <td>{vehicule.assurance_date}</td>
                <td>{vehicule.vignette}</td>
                <td>{vehicule.vignette_date}</td>
                <td>{vehicule.visite_technique}</td>
                <td>{vehicule.visite_technique_date}</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehicule;
