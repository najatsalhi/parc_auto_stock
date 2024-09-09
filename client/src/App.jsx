import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./addUser.js";
import Login from "./login.jsx";
import Gestion from "./Gestion.js";
import Dash from "./dashboard.js";
import Stock from "./Stock.js";
import Home1 from "./Home.js";
import ForgotPassword from "./Passwforget.js";
// import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Layout from "./components/Layout.jsx";
import Reports from "./pages/Reports.jsx";
import Repairs from "./pages/Repairs.jsx";
import Vehicule from "./pages/Vehicule.jsx";
import Logout from "./pages/logout.jsx";
import Personnel from "./pages/Personnel.jsx";
import Recharge from "./pages/Recharge.jsx";

function App() {
  return (
    <BrowserRouter basename="/home">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/Forget" element={<ForgotPassword />} />
        <Route path="/layout/" element={<Layout />}>
          <Route path="members" element={<Members />} />
          <Route path="Rapports" element={<Reports />} />
          <Route path="Reparation" element={<Repairs />} />
          <Route path="Vehicules" element={<Vehicule />} />
          <Route path="Deconnection" element={<Logout />} />
          <Route path="Personnel" element={<Personnel />} />
          <Route path="Recharge" element={<Recharge/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
