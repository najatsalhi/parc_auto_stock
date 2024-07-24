import React from 'react';
import  { BrowserRouter, Routes, Route }from 'react-router-dom';
import AddUser from './addUser';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" component={Login} />
          <Route path="/addUser" component={AddUser} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;