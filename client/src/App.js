import React from 'react';
import  { BrowserRouter, Routes, Route }from 'react-router-dom';
import AddUser from './addUser';
import Login from './login';
import Gestion from './Gestion';
import Dash from './dashboard';
import Stock from './Stock';
import ParcAuto from './ParcAuto';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/gestion" element={<Gestion/>} />
          <Route path="/dash" element={<Dash/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/parcauto" element={<ParcAuto/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;