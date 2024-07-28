import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./add_user_validation";
import Axios from "axios";

function AddUser() {
  const [values, setValues] = useState({
    nom: "",
    prenom:"",
    email: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  function handleInput(event) {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validation(values));
    if (
      errors.nom === "" &&
      errors.prenom === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.role === ""
    ) {
      Axios.post("http://localhost:8081/addUser", values)
        .then((res) => {
          console.log(res);
          navigate('/');
        }).catch((errors) => console.log(errors));
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div
        className="bg-white "
        style={{
          borderRadius: "20px",
          boxShadow: "0px 16px 40px 0px rgba(154, 170, 207, 0.2)",
          backgroundColor: "#fff",
          alignSelf: "center",
          display: "flex",
          marginTop: "86px",
          width: "590px",
          maxWidth: "100%",
          flexDirection: "column",
          alignItems: "center",
          color: "#4b4b4b",
          fontWeight: 400,
          padding: "80px",
        }}
      >
        <h1 style={{ color: "black", textAlign: "center" }}>Ajouter</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Nom</label>
            <br></br>
            <input
              type="text"
              placeholder="nom"
              name="nom"
              id="nom"
              onChange={handleInput}
            />
            {errors.nom && <span class="text-danger">{errors.nom}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="prenom">Nom</label>
            <br></br>
            <input
              type="text"
              placeholder="Prenom"
              name="prenom"
              id="prenom"
              onChange={handleInput}
            />
            {errors.prenom && <span class="text-danger">{errors.prenom}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mot de passe</label>
            <br></br>
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              id="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Confirmer">Confirmer</label>
            <br></br>
            <input
              type="password"
              placeholder="Confirmer"
              name="Confirmer"
              id="Confirmer"
              onChange={handleInput}
            />
            {errors.Confirmer && (
              <span className="text-danger">{errors.Confirmer}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="list-select">Role</label>
            <br></br>
            <select
              placeholder="Role"
              name="role"
              id="list-select"
              onChange={handleInput}
            >
              <option value="admin">Admin </option>
              <option value="user">User</option>
            </select>
            {errors.role && <span className="text-danger">{errors.role}</span>}
          </div>
          <p style={{ fontSize: "12px" }}>Mot de passe oublié ?</p>
          <button type="submit" className="btn_btn_success">
            Ajouter
          </button>{" "}
          <br></br>
          <Link to="/" className="btn_btn_default">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
