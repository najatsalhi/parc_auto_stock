import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import validation from './loginvalidation';
import axios from axios;
function AddUser () {
    const [values,setValues]= useState
    ({
        email: '',
        password:''
    })
    const navigate = useNavigate();

    const [errors,setErrors]= useState({})
    const handleInput = (vald) => {
        setValues(prev =>({...prev,[vald.target.name]:[vald.target.value]}))
    }
    const handleSubmit = (vald) => {
        vald.preventDefault();
        setErrors(validation(values));
        }
    }
    const err = validation (values);
    setErrors(err)
    if (err.name ==="" && err.email ==="" && err.password ===""&& err.role ===""){
        axios.post('http://localhost:3306/addUser',values)
        .then(res =>{  
            navigate('/');
        })
        .catch(err => console.log(err));
    return (
    <div className='d-flex justify-content-center'>
            <div className='bg-white ' style={{ borderRadius: '20px', boxShadow: '0px 16px 40px 0px rgba(154, 170, 207, 0.2)', backgroundColor: '#fff', alignSelf: 'center', display: 'flex', marginTop: '86px', width: '590px', maxWidth: '100%', flexDirection: 'column', alignItems: 'center', color: '#4b4b4b', fontWeight: 400, padding: '80px' }}>
            <h1 style={{color:'black', textAlign:'center'}}>Ajouter</h1>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="user">user</label><br></br>
                        <input type="user" placeholder='user' name="user" id="user" 
                        onChange={handleInput}/>
                        {errors.user && <span class='text-danger'>{errors.user}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label><br></br>
                        <input type="email" placeholder='Email' name="email" id="email" 
                        onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Mot de passe</label><br></br>
                        <input type="password" placeholder='Mot de passe' name="password" id="password" />
                   
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Confirmer">Confirmer</label><br></br>
                        <input type="password" placeholder='Confirmer' name="Confirmer" id="Confirmer" 
                        onChange={handleInput}/>
                        {errors.Confirmer && <span className='text-danger'>{errors.Confirmer}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="list-select">Role</label><br></br>
                        <select placeholder='Role' name="role" id="list-select"> 
                            <option value="admin">Admin </option>
                            <option value="user">User</option>
                            onChange={handleInput}
                        </select>
                        
                        {errors.role && <span className='text-danger'>{errors.role}</span>}
                    </div>
                    <p style={{fontSize: '12px'}}>Mot de passe oublié ?</p>
                    <button type ='submit' className='btn_btn_success'>Ajouter</button> <br></br>
                    <Link to='/accueil' className='btn_btn_default'>Annuler</Link>
                </form>
            </div>
    </div>
    );
};

export default AddUser;