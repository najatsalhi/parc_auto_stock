import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./loginvalidation"; // login validation
import axios from "axios";
import "./login.css"; // login page.css with header css
import Atsign from "./Atsign.svg"; // icon @
import Lock from "./Lock.svg"; // icon lock
import Header from "./Header"; // headers

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);  
    if (err.password === "" && err.email === "") {
      axios.post("http://localhost:3001/login", values)
        .then(res => {
          if (res.data === "success") {
            navigate("/dash");
            alert("Welcome");
          } else {
            alert("no record");
          }
        })
        
       .catch(err => alert("errors",err));
    }
  };
  return (
    <div className="back">
      <Header />
      <div className="box ">
        <form action="" onSubmit={handleSubmit}>
          <div className="cont">
            <h3>Welcome!</h3>
            <div className="mb-3">
              <div className="wrapper">
                <div className="input-data">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="name-input1"
                    placeholder=""
                    onChange={handleInput}
                    value={values.email}
                    
                  />
                  <div className="log1">
                    <div className="name-label1" htmlFor="email">
                      Email
                    </div>
                    <img className="em" src={Atsign} alt="icon" />
                  </div>
                </div>
              </div>
              </div>
            {errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}

            </div>

            <div className="mb-2">
              <div className="wrapper">
                <div className="input-data">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    className="name-input2"
                    placeholder=""
                    onChange={handleInput}
                    value={values.password}
                  />
                  <div className="log2">
                    <div className="name-label2" htmlFor="password">
                      Mot de passe
                    </div>
                    <img className="ps" src={Lock} alt="icon" />
                  </div>
                </div>
              </div>
              {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
            
            <p className="forget">
              <a href="/Forget">Mot de passe oublié ?</a>
            </p>

            <button type="submit" id="butn" className="btn btn-success">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;