import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmer: "",
    role: "",
    telephone: "",
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
      .get("http://localhost:3001/layout/members")
      .then((res) => setMembers(res.data))
      .catch((err) => alert("Member errors"));
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
    if (!Data.email) {
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }
    if (!Data.password) {
      errors.password = "Password is required";
    } else {
      errors.password = "";
    }
    // if (!Data.confirmer) {
    //   errors.confirmer = "Confirmer is required";
    // }
    // else if (Data.password !== Data.confirmer) {
    //   errors.confirmer = "Confirmer is required";
    // } else {
    //   errors.confirmer = "";
    // }
    if (!Data.role) {
      errors.role = "Role is required";
    } else {
      errors.role = "";
    }
    if (!Data.telephone) {
      errors.telephone = "Téléphone is required";
    } else {
      errors.telephone = "";
    }
    return errors;
  }

  function pass(Data) {
    const errors = {};
    if (!Data.confirmer) {
      errors.confirmer = "Confirmer is required";
    } 
     else{
      errors.confirmer = "";
     }
     setErrors(errors);
    return errors;
  }

  const add_members = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    const err2 = pass(values); // Now using `values` to check confirmer
    setErrors((prev) => ({ ...prev, ...err2 })); // Combine both error sets

    if (
      err.nom === "" &&
      err.prenom === "" &&
      err.email === "" &&
      err.password === "" &&
      err.role === "" &&
      err.telephone === "" &&
      err2.confirmer === ""
    ) {
      axios
        .post("http://localhost:3001/layout/members", values)
        .then((res) => {
          alert("Membere added successfully");
          fetching();
        })
        .catch((err) => alert("errors"));
    }
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
                />
              </div>
            </div>
            {errors.nom && (
              <div className="text-danger">{errors.nom}</div>
            )}
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
                />
              </div>
            </div>
            {errors.prenom && (
              <div className="text-danger">{errors.prenom}</div>
            )}
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
                />
              </div>
            </div>
            {errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
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
                />
              </div>
            </div>
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
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
                />
              </div>
            </div>
            {errors.confirmer && (
              <div className="text-danger">{errors.confirmer}</div>
            )}
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
                />
              </div>
            </div>
            {errors.role && (
              <div className="text-danger">{errors.role}</div>
            )}
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
                />
              </div>
            </div>
            {errors.telephone && (
              <div className="text-danger">{errors.telephone}</div>
            )}
          </div>
          <button id="butn5" type="submit">
            <span className="bet">Ajouter</span>
          </button>
        </form>
      </div>

      {/* Members List Section */}
      <div className="members-list">
        <h3>Liste des Membres</h3>
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
            {members.map((members) => (
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
