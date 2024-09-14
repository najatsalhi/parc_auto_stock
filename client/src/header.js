import rm from "./rm.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header1">
       <Link to="/">
       <div className="logo">
        <img className="img1" srcSet={rm} alt="logo"/>
        <div className="div-4">ParcAuto</div>
        </div>
      </Link>
      <div className="di">
      <Link className="a0" to="/"> <div>Accueil</div></Link>
      <a className="a1" href="#section1"> <div>Services</div></a>
      <a className="a2" href="#section2"><div>A propos</div></a>
      <a className="a3" href="#section3"> <div>Contact</div></a> 
      </div>
    </div>
  );
}
export default Header;
