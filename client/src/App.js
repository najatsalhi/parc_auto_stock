import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./addUser";
import Login from "./login";
import Gestion from "./Gestion";
import Dash from "./dashboard";
import Stock from "./Stock";
import ParcAuto from "./ParcAuto";
import Home1 from "./Home.js";
import ForgotPassword from "./Passwforget";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/Forget" element={<ForgotPassword/>}/>
        <Route path="/parcauto" element={<ParcAuto />} />
        <Route path="/Layout" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
        </Route>
        <Route element={<Layout />}>
            <Route path="/Users" element={<Users />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Repairs" element={<Repairs />} />
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
