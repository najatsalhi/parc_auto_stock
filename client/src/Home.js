import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "./Header";
import R from "./R.png";
import cars from "./cars.svg";
import sk from "./sk.svg";

const Home1 = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div>
      <Header />
      <div className="textWrapper">
        <div className="imageContainer">
          <img srcSet={R} alt="Wilaya" />
        </div>
        <div className="textContainer">
          <h1 className="title">ParcAuto</h1>
          <p className="description">
            Bienvenue dans notre application de gestion de parc automobile.
            Simplifiez la gestion de vos véhicules et stocks.
          </p>
          <button className="buttons" onClick={handleLoginClick}>
            Se connecter
          </button>
        </div>
      </div>
      <div className="rect flex">
        <div id="section1" className="rect1 flex">
          <div className="car">
            <img src={cars} alt="icon" />
          </div>
          <div className="stk">
            <h1 className="titre">Gestion de parc automobile</h1>
            <p className="para">
              ParcAuto est une application de gestion de parc automobile qui
              vous permet de gérer efficacement vos véhicules . Vous pouvez
              suivre les réparations, les révisions, les entretiens, les
              missions, les utilisateurs et bien plus encore.
            </p>
          </div>
        </div>
        <div className="service ">
          <h3>Services</h3>
          <ul>
            <li>
              <p>Tableau de bord</p>
            </li>
            <li>
              <p>Membres</p>
            </li>
            <li>
              <p>Personnel</p>
            </li>
            <li>
              <p>Véhicules</p>
            </li>
            <li>
              <p>Missions</p>
            </li>
            <li>
              <p>Recharge Carburant</p>
            </li>
            <li>
              <p>Réparation</p>
            </li>
            <li>
              <p>Rapports</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rect flex">
        <div className="service2 ">
          <h3>Services</h3>
          <ul>
            <li>
              <p>Tableau de bord</p>
            </li>
            <li>
              <p>Membres</p>
            </li>
            <li>
              <p>Articles</p>
            </li>
            <li>
              <p>Rapports</p>
            </li>
            <li>
              <p>Réparation</p>
            </li>
          </ul>
        </div>
        <div className="rect2 flex">
          <div className="stk">
            <h1 className="titre">Gestion de stock</h1>
            <p className="para">
              Gestion de stock est un outil de gestion de stock qui aide à gérer
              efficacement leurs stocks des articles. Il permet de suivre les
              quantités de articles en stock, de gérer les entrées et sorties de
              stock, de suivre les niveaux de stock.
            </p>
          </div>
          <div className="stock">
            <img src={sk} alt="icon" />
          </div>
        </div>
      </div>
      <div className="apropos">
        <section class="about-section">
          <div class="container">
            <h2 id="section2">Qui sommes-nous ?</h2>
            <p>
              Nous sommes des stagiaires au sein de la WILAYA dédiée à fournir
              des solutions efficaces pour la gestion de parc automobile et de
              stocks. Avec des années d'expérience, nous aidons nos clients à
              simplifier la gestion de leurs ressources tout en augmentant
              l'efficacité et en réduisant les coûts.
            </p>
          </div>
        </section>

        <footer id="section3">
          <div>
            <p>Tel:</p>
            <p>Email:</p>
          </div>
          <div className="droit">
            <p>&copy; 2024 ParcAuto. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home1;
