import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons


const Personnel = () => {
  const [Personnel, setPersonnel] = useState([]);
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
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = Personnel.filter((user) =>
    `${user.nom} ${user.id_vehicule} ${user.prenom}`
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
      .get("http://localhost:3001/layout/Personnel")
      .then((res) => setPersonnel(res.data))
      .catch((err) => alert("Personnel errors"));
  };

  const addPersonnel = (e) => {
    e.preventDefault();
    
      axios
        .post("http://localhost:3001/Layout/Personnel", values)
        .then((res) => {
          alert("Personnel added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    
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
                <label htmlFor="id_vehicule">ID Vehicule:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="number"
                  required
                  onChange={handleChange}
                  name="id_vehicule"
                />
              </div>
            </div>
            
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="nom">Nom:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                  onChange={handleChange}
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
      {/* Personnel List Section */}
      <div className="personnel-list">
        <h3>Liste de personnels</h3>
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
              <th>Personnel ID</th>
              <th>Vehicule ID</th>
              <th>Nom</th>
              <th>prenom</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>permis</th>
              <th>Date d'acquisation</th>
              <th>Date de récéption:</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((personnel) => (
              <tr key={personnel.id_chauffeur}>
                <td>{personnel.id_chauffeur}</td>
                <td>{personnel.id_vehicule}</td>
                <td>{personnel.nom}</td>
                <td>{personnel.prenom}</td>
                <td>{personnel.telephone}</td>
                <td>{personnel.email}</td>
                <td>{personnel.permie}</td>
                <td>{personnel.date_debut}</td>
                <td>{personnel.date_fin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Personnel;
