import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    type: "",
    date_debut: "",
    date_fin: "",
    cout: "",
    description: "",
    id_chauffeur:"",
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
      .get("http://localhost:3001/layout/Missions")
      .then((res) => setMissions(res.data))
      .catch((err) => alert("Missions errors"));
  };

  function validation(Data) {
    let errors = {};
    if (!Data.type) {
      errors.type = "Type is required";
    } else {
      errors.type = "";
    }
    if (!Data.date_debut) {
      errors.date_debut = "Date de debut is required";
    } else {
      errors.date_debut = "";
    }
    if (!Data.date_fin) {
      errors.date_fin = "Date de fin is required";
    } else {
      errors.date_fin = "";
    }
    if (!Data.cout) {
      errors.cout = "Cout is required";
    } else {
      errors.cout = "";
    }
    if (!Data.destination) {
      errors.destination = "Destination is required";
      } else {
        errors.destination = "";
        }
    if (!Data.id_chauffeur) {
      errors.id_chauffeur = "ID Chauffeur is required";
    } else {
      errors.id_chauffeur = "";
    }
    if (!Data.id_vehicule) {
      errors.id_vehicule = "ID Vehicule is required";
    } else {
      errors.id_vehicule = "";
    }
    return errors;
  }

  const addMissions = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (
      err.type === "" &&
      err.date_debut === "" &&
      err.date_fin === "" &&
      err.cout === "" &&
      err.destination === "" &&
      err.id_chauffeur === "" &&
      err.id_vehicule === ""
    ) {
      axios
        .post("http://localhost:3001/layout/Missions", values)
        .then((res) => {
          alert("Missions added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    }
  };

  return (
    <div className="Missions-page">

      {/* Add Missions Section */}
      <div className="add-Missions ">
        <h3>Ajouter un Missions </h3>
        <form action="" onSubmit={addMissions}>
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
                <label htmlFor="date_debut">Date de début:</label>
              </div>
              <div>
                <input className="inputt"
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
                <label htmlFor="date_fin">Date de Fin:</label>
              </div>
              <div>
                <input className="inputt"
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
                <label htmlFor="destination">Destination:</label>
              </div>
              <div>
                <input className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="destination"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="id_chauffeur">ID Chauffeur:</label>
              </div>
              <div>
                <input className="inputt"
                  type="number"
                  onChange={handleChange}
                  name="id_chauffeur"
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
              <span className="bet">Ajouter</span>
            </button>
          
        </form>
      </div>

      {/* Missions List Section */}
      <div className="Missions-list">
        <h3>Liste des Missionss</h3>
        <table>
          <thead>
            <tr>
              <th>ID Missions</th>
              <th>Type</th>
              <th>date_debut</th>
              <th>date_fin</th>
              <th>Coût</th>
              <th>Destination</th>
              <th>ID Chauffeur</th>
              <th>ID Vehicule</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((Missions) => (
              <tr key={Missions.id_mission}>
                <td>{Missions.id_mission}</td>
                <td>{Missions.type}</td>
                <td>{Missions.date_debut}</td>
                <td>{Missions.date_fin}</td>
                <td>{Missions.cout}</td>
                <td>{Missions.destination}</td>
                <td>{Missions.id_chauffeur}</td>
                <td>{Missions.id_vehicule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Missions;
