import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Header from './Header.js';

function Gestion() {
    return (
        <div>
            <Header/>
            <div className="container">
            <div><h1>users</h1>
            <table>
                <tr>
                    <td>id</td><td>name</td> <td>prenom</td> <td>email</td> <td>role</td>                 
                </tr>
                <tr>
                    <td>1</td> <td>amine</td> <td>ben</td> 
                </tr>
            </table>
            </div>
            <Link to='/gestion' className='btn_btn_success'>modifier</Link>
        </div>
        </div>
    )

}
export default Gestion;