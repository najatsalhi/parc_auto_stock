import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import validation from './loginvalidation';
function Login () {
    const [values,setValues]= useState
    ({
        email: '',
        password:''
    })
    const [errors,setErrors]= useState({})
    const handleInput = (vald) => {
        setValues(prev =>({...prev,[vald.target.name]:[vald.target.value]}))
    }
    const handleSubmit = (vald) => {
        vald.preventDefault();
        setErrors(validation(values));
    }
    return (
    <div className='d-flex justify-content-center'>
            <div className='bg-white ' style={{ borderRadius: '20px', boxShadow: '0px 16px 40px 0px rgba(154, 170, 207, 0.2)', backgroundColor: '#fff', alignSelf: 'center', display: 'flex', marginTop: '86px', width: '590px', maxWidth: '100%', flexDirection: 'column', alignItems: 'center', color: '#4b4b4b', fontWeight: 400, padding: '80px' }}>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label><br></br>
                        <input type="email" placeholder='Email' name="email" id="email" 
                        onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Mot de passe</label><br></br>
                        <input type="password" placeholder='Mot de passe' name="password" id="password" />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <p style={{fontSize: '12px'}}>Mot de passe oublié ?</p>
                    <button type ='submit' className='btn_btn_success'>Se connecter</button> 
                    <Link to='/addUser' className='btn_btn_success'>ajouter</Link>
                    
                </form>
            </div>
    </div>
    );
};

export default Login;