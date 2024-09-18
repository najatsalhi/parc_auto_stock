import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons


const Members = () => {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmer: "",
    role: "",
    telephone: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = members.filter((user) =>
    `${user.nom} ${user.prenom}`
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
      .get("http://localhost:3001/layout/members")
      .then((res) => setMembers(res.data))
      .catch((err) => alert("Member errors"));
  };

 
  const add_members = (event) => {
    event.preventDefault();
  
      axios
        .post("http://localhost:3001/layout/members", values)
        .then((res) => {
          alert("Membere added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    
  };

  return (
    <div className="members-page">
      {/* Add Members Section */}
      <div className="add-members ">
        <h3>Ajouter un membre </h3>
        <form action="" onSubmit={add_members}>
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
     
     required/>
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
                  name="prenom"
                  onChange={handleChange}
                required />
       
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
                  type="text"
                  onChange={handleChange}
                  name="email"
   
   required/>
              </div>
            </div>
            
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="password">Password:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="password"
                  onChange={handleChange}
                  name="password"

required/>
              </div>
            </div>
            
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="confirmer">Comfirmer:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="password"
                  onChange={handleChange}
                  name="confirmer"
                  required
                />
              </div>
            </div>
            
          </div>
          <div>
            <div className="wrapper">
              <div>
                <label htmlFor="role">Role:</label>
              </div>
              <div>
                <input
                  className="inputt"
                  type="text"
                  onChange={handleChange}
                  name="role"
    
    required/>
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
                  type="text"
                  onChange={handleChange}
                  name="telephone"
                  required
                />
              </div>
            </div>
           
          </div>
          <button id="butn5" type="submit">
            <span className="bet">Ajouter</span>
          </button>
        </form>
      </div>

      {/* Members List Section */}
      <div className="members-list">
        <h3>Liste des Membres</h3>
        <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
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
              <th>ID Membres</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((members) => (
              <tr key={members.id_user}>
                <td>{members.id_user}</td>
                <td>{members.nom}</td>
                <td>{members.prenom}</td>
                <td>{members.email}</td>
                <td>{members.password}</td>
                <td>{members.role}</td>
                <td>{members.telephone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
