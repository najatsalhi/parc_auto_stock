import React from 'react';

const Login = () => {
    return (
    <div className='d-flex justify-content-center'>
            <div className='bg-white '>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label><br></br>
                        <input type="email" placeholder='Email' name="email" id="email" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Mot de passe</label><br></br>
                        <input type="password" placeholder='Mot de passe' name="password" id="password" />
                    </div>
                    <p>Mot de passe oublié ?</p>
                    <button className='btn_btn_success'>Se connecter</button>
                    <button className='btn_btn_default_border'>S'inscrire</button>
                </form>
                {/* Your login component JSX goes here */}
            </div>
        </div>
    );
};

export default Login;