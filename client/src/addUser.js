import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "./add_user_validation";

function AddUser() {
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmer: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    
    if (
      err.nom === "" &&
      err.prenom === "" &&
      err.password === "" &&
      err.email === "" &&
      err.confirmer === ""
    ){
      axios.post("http://localhost:3001/addUser", values)
        .then(res => {
          navigate("/");
        })
        .catch(err => console.log(err));
        alert("Success");
    }
    
  };
  return (
    <div className="d-flex justify-content-center">
      <div
        className="bg "
        style={{
          borderRadius: "20px",
          boxShadow: "0px 16px 40px 0px rgba(154, 170, 207, 0.2)",
          backgroundColor: "#fff",
          alignSelf: "center",
          display: "flex",
          marginTop: "86px",
          width: "450px",
          maxWidth: "100%",
          flexDirection: "column",
          alignItems: "center",
          color: "#4b4b4b",
          fontWeight: 400,
          padding: "90px",
        }}
      >
        <h1 style={{alignItems: "center",flexDirection: "column",display: "flex",marginTop: "26px",alignSelf: "center", color: "black", textAlign: "center" }}>Ajouter</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom">Nom</label>
            <br></br>
            <input
              type="text"
              placeholder=""
              name="nom"
              id="nom"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom">Prénom</label>
            <br></br>
            <input
              type="text"
              placeholder=""
              name="prenom"
              id="prenom"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              placeholder=""
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mot de passe</label>
            <br></br>
            <input
              type="password"
              placeholder=""
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Confirmer">Confirmer</label>
            <br></br>
            <input
              type="password"
              placeholder=""
              name="Confirmer"
              id="Confirmer"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Ajouter
          </button>
          <br></br>
          <Link to="/" className="btn btn-default">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
