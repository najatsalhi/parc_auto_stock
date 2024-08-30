import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./addUser.js";
import Login from "./login.js";
import Gestion from "./Gestion.js";
import Dash from "./dashboard.js";
import Stock from "./Stock.js";
import ParcAuto from "./ParcAuto.js";
import Home1 from "./Home.js";
import ForgotPassword from "./Passwforget.js";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Layout from "./components/Layout.jsx";
import Reports from "./pages/Reports.jsx";
import Repairs from "./pages/Repairs.jsx";
import Vehicule from "./pages/Vehicule.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/Forget" element={<ForgotPassword/>}/>
        <Route path="/parcauto" element={<ParcAuto />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members"  element={<Members />} />
          <Route path="Rapports" element={<Reports />} />
          <Route path="Réparation" element={<Repairs />} />
          <Route path="Vehicules" element={<Vehicule />} />
        </Route>
        {/* <Route element={<Layout />}>
            <Route path="/Users" element={<Users />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Repairs" element={<Repairs />} />
          </Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
