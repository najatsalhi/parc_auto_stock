import React, { useState } from 'react';
import axios from 'axios';
import "./login.css";
import Header from './Header';
import Atsign from "./Atsign.svg";  

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/Forget', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="back2">           
    <Header />          
    <div className="box2">           
      <form action="" onSubmit={handleSubmit}>
        <div className="cont2">
        <h3>Rénitialiser le mot de passe</h3>
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="log1">
                <div className="name-label1" htmlFor="email">
                  Email
                </div>
                <img className="em" src={Atsign} alt="icon"/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <br/>
        <button id='butn2' type="submit" className="btn btn-success" >
          Envoyer 
          </button>
        
      </form>
      {message && <p>{message}</p>}
    
   </div>
   </div>
  );
}

export default ForgotPassword;