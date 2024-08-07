import { Link, useNavigate } from "react-router-dom";
import Headers from "./header.js"; 

function ParcAuto() {
    const navigate=useNavigate();
    return(
        <div>
            <Headers/>
            <h1>ParcAuto</h1>
            <Link to="/addUser" 
            className="btnusers " >Users</Link>  
        </div>
    )
}
export default ParcAuto;