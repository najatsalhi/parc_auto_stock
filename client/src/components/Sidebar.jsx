import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import rm from "../rm.png";

// ICONS
import { LuUser } from "react-icons/lu";
import { MdLocalGasStation } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { TbUsers } from "react-icons/tb";
import { HiViewBoards } from "react-icons/hi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarRear } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";

// ICONS

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/Layout", name: "Tableau de bord", icon: HiViewBoards },
    { id: 2, path: "/Layout/members", name: "Membres", icon: LuUser },
    { id: 3, path: "/Layout/Personnel", name: "Personnel", icon: TbUsers },
    { id: 4, path: "/Layout/Vehicules", name: "Véhicules", icon: FaCarRear },
    { id: 5, path: "/Layout/Missions", name: "Missions", icon: FaTasks },
    { id: 6, path: "/Layout/Recharge", name: "Recharge Carburant", icon: MdLocalGasStation },
    { id: 7, path: "/Layout/Reparation", name: "Réparation", icon: BiSolidCarMechanic },
    { id: 8, path: "/Layout/Rapports", name: "Rapports", icon: CgNotes },
    { id: 9, path: "/Layout/Deconnection", name: "Déconnexion", icon: PiSignOutBold },
  ];

  return (
    <div className="side fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4">
      {/* Logo */}
      <Link to="/">
        {" "}
        <div className="mb-9 flex">
          <img srcSet={rm} alt="logo" className="logo w-14 hidden md:flex" />
          <span className="park font-medium text-lg">ParcAuto</span>
        </div>
      </Link>

      {/* Navigation Links */}

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-3 justify-center hover:bg-white hover:text-Poppins-500 ${
              activeLink === index ? "bg-blue-100 text-blue-600" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="names text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Need Help Section */}
      <div className="flex justify-center text-center bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <Link to="/Aide">
          <p className="flex items-center space-x-2 text-m text-white py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
            <span className="hidden font-medium w-12 md:flex">Aide</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
