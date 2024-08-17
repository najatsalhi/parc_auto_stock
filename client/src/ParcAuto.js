import { Link, useNavigate } from "react-router-dom";
import "./ParcAuto.css";
import rm from "./rm.png";

function ParcAuto() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="head">
        <div className="logo">
          <img className="img1" srcSet={rm} alt="logo" />
          <div className="div-4">ParcAuto</div>
        </div>
        <Link to="/addUser" className="btnusers ">
          Users
        </Link>
      </div>
      <div className="parc">
        <h1>ParcAuto</h1>
      </div>
      <Link to="/addCar" />
    </div>
  );
}
export default ParcAuto;
