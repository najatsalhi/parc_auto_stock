import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from "./Header";

const Home1 = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div><Header/>
    <div className="textWrapper">
      <div className="imageContainer">
        <img src="R.png" alt="Wilaya" />
      </div>
      <div className="textContainer">
        <h1 className="title">ParcAuto</h1>
        <p className="description">Bienvenue dans notre application de gestion de parc automobile. Simplifiez la gestion de vos véhicules et stocks.</p>
        <button className="buttons" onClick={handleLoginClick}>Se connecter</button>
      </div>
    </div>
    </div>
  );
};

export default Home1;