import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./addUser.js";
import Login from "./login.jsx";
import Dash from "./dashboard.js";
import Stock from "./Stock.jsx";
import Home1 from "./Home.js";
import ForgotPassword from "./Passwforget.js";
import Members from "./pages/Members.jsx";
import Layout from "./components/Layout.jsx";
import Reports from "./pages/Reports.jsx";
import Repairs from "./pages/Repairs.jsx";
import Vehicule from "./pages/Vehicule.jsx";
import Logout from "./pages/logout.jsx";
import Personnel from "./pages/Personnel.jsx";
import Recharge from "./pages/Recharge.jsx";
import Missions from "./pages/Missions.jsx";
import Aide from "./pages/Aide.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.js";
import Articles from "./pages/Articles.js";
import Users from "./pages/Users.js";
import Repairs1 from "./pages/Repairs.js";
import Reports1 from "./pages/Reports.js";

function App() {
  return (
    <BrowserRouter basename="/home">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/Stock/" element={<Stock />} >
            <Route path="Users" element={<Users />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Articles" element={<Articles />} />
            <Route path="Reports" element={<Reports1 />} />
            <Route path="Repairs" element={<Repairs1 />} />
          </Route>
        <Route path="/Forget" element={<ForgotPassword />} />
        <Route path="/Aide" element={<Aide />} />
        <Route path="/layout/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="Rapports" element={<Reports />} />
          <Route path="Reparation" element={<Repairs />} />
          <Route path="Vehicules" element={<Vehicule />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="Deconnection" element={<Logout />} />
          <Route path="Personnel" element={<Personnel />} />
          <Route path="Recharge" element={<Recharge/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
