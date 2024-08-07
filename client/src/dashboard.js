import React from "react";
import { Link } from "react-router-dom";
import Headers from "./header.js"; // headers
import "./dashboard.css";

function Dash() {
  return (
    <div className="back">
      <Headers />
      <h1>Dashboard</h1>
      <div className="grp-card">
        <Link to="/ParcAuto"  className="card1">
          <p>ParcAuto</p>
        </Link>
        <Link to="/Stock" className="card2">
          <p>Stock</p>
        </Link>
      </div>
      <style></style>
    </div>
  );
}
export default Dash;
