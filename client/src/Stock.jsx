import React from 'react'
import Header from './components/Header.jsx'
import './index.css';
import { Outlet } from 'react-router-dom';
import Sidebar1 from './components/Sidebar1';


function Stock() {
  return (
    <div>
        <div className='flex'>
            <Sidebar1/>
            <div className='layo w-full ml-18 md:ml-59'>
                <Header/>
                <Outlet />
                
            </div>
        </div>
    </div>
  );
};

export default Stock;