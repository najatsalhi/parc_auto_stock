import React from 'react';
import  { BrowserRouter, Routes, Route }from 'react-router-dom';
import AddUser from './addUser';
import Login from './login';
import Gestion from './Gestion_user';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/gestion" element={<Gestion/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;