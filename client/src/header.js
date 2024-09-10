import rm from "./rm.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
       <Link to="/">
       <div className="logo">
        <img className="img1" srcSet={rm} alt="logo"/>
        <div className="div-4">ParcAuto</div>
        </div>
      </Link>
      <div className="di">
        <div>Accueil</div>
        <div>Services</div>
        <div>A propos</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
export default Header;
