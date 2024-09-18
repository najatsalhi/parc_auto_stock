import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons


const Recharge = () => {
  const [recharge, setRecharge] = useState([]);
  const [values, setValues] = useState({
    type: "",
    date_recharge: "",
    cout: "",
    quantite: "",
    fournisseur: "",
    facture: "",
    id_vehicule: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = recharge.filter((user) =>
    ` ${user.id_vehicule}`
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
      .get("http://localhost:3001/layout/Recharge")
      .then((res) => setRecharge(res.data))
      .catch((err) => alert("Recharge errors"));
  };

  const addRecharge = (event) => {
    event.preventDefault();
    
      axios
        .post("http://localhost:3001/layout/Recharge", values)
        .then((res) => {
          alert("Recharge added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    
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

            <button id="butn5" type="submit">
              <span className="bet">Ajouter</span>
            </button>
          
        </form>
      </div>

      {/* Recharge List Section */}
      <div className="recharge-list">
        <h3>Liste des Recharges</h3>
        <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search vehicule ID...."
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
              <th>ID Recharge</th>
              <th>ID Vehicule</th>
              <th>Type</th>
              <th>date_recharge</th>
              <th>Coût</th>
              <th>Quantite</th>
              <th>Fournisseur</th>
              <th>Facture</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((recharge) => (
              <tr key={recharge.id_recharge_carb}>
                <td>{recharge.id_recharge_carb}</td>
                <td>{recharge.id_vehicule}</td>
                <td>{recharge.type}</td>
                <td>{recharge.date_recharge}</td>
                <td>{recharge.cout}</td>
                <td>{recharge.quantite}</td>
                <td>{recharge.fournisseur}</td>
                <td>{recharge.facture}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Recharge;
