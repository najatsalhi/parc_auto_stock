import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [values, setValues] = useState({
    type: "",
    date_debut: "",
    date_fin: "",
    cout: "",
    description: "",
    id_chauffeur:"",
    id_vehicule: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
    const filteredUsers = missions.filter((user) =>
      `${user.id_chauffeur} ${user.id_chauffeur}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  

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

  

  const addMissions = (event) => {
    event.preventDefault();
   
      axios
        .post("http://localhost:3001/layout/Missions", values)
        .then((res) => {
          alert("Missions added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    
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
                <label htmlFor="id_chauffeur">ID Chauffeur:</label>
              </div>
              <div>
                <input className="inputt"
                  type="number"
                  onChange={handleChange}
                  required
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
                  required
                  name="id_vehicule"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="type">Type:</label>
              </div>
              <div>
                <input className="inputt" 
                  type="text"
                  onChange={handleChange}
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                  name="destination"
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
        <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: "none" }}
          />
          <span className="search-icon"><FaSearch /></span>
        </div>
      </div>
        <table>
          <thead>
            <tr>
              <th>ID Missions</th>
              <th>ID Chauffeur</th>
              <th>ID Vehicule</th>
              <th>Type</th>
              <th>date_debut</th>
              <th>date_fin</th>
              <th>Coût</th>
              <th>Destination</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((Missions) => (
              <tr key={Missions.id_mission}>
                <td>{Missions.id_mission}</td>
                <td>{Missions.id_chauffeur}</td>
                <td>{Missions.id_vehicule}</td>
                <td>{Missions.type}</td>
                <td>{Missions.date_debut}</td>
                <td>{Missions.date_fin}</td>
                <td>{Missions.cout}</td>
                <td>{Missions.destination}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Missions;
