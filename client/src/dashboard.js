import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header.js"; // headers
import "./dashboard.css";
import cars from "./cars.svg";  
import sk from "./sk.svg";  

function Dash() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/Layout");
  };

  const handleClick2 = () => {
    navigate("/stock");
  };

  return (
    <div>
      <Header />
      <div className="grp-card">
        <div>
          <button className="card1" onClick={handleClick1}>
            <img src={cars} alt="icon"/>
            <span style={{ fontSize: "30px" ,color: "rgba(75, 75, 75, 1)"}}>ParcAuto</span>
          </button>
        </div>
        <div>
          <button className="card2" onClick={handleClick2}>
            <img src={sk} alt="icon"/> 
            <span style={{ fontSize: "30px" ,color: "rgba(75, 75, 75, 1)"}}>Stock</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dash;
