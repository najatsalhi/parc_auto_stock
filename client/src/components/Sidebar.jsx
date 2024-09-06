import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';
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
// ICONS

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/Layout", name: "Tableau de bord", icon: HiViewBoards },
    { id: 2, path: "/Layout/members", name: "Members", icon: LuUser },
    { id: 3, path: "/Layout/Personnel", name: "Personnel", icon: TbUsers },
    { id: 4, path: "/Layout/Vehicules", name: "Vehicules", icon: FaCarRear },
    { id: 5, path: "/Layout/Recharge", name: "Recharge Carburant", icon: MdLocalGasStation },
    { id: 6, path: "/Layout/Reparation", name: "Réparation", icon: BiSolidCarMechanic },
    { id: 7, path: "/Layout/Rapports", name: "Rapports", icon: CgNotes },
    { id: 8, path: "/Layout/Deconnection", name: "Déconnection", icon: PiSignOutBold },
  ];

  return (
    <div className="side fixed left-0 top-0 z-10 h-screen border-r pt-8 px-3">
      {/* Logo */}
      <div className="mb-9 flex">
        <img srcSet={rm} alt="logo" className="logo w-14 hidden md:flex" />
        <span className="park font-medium text-lg">ParcAuto</span>
      </div>
      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-3 justify-center hover:bg-white hover:text-Poppins-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Need Help Section */}
      <div className="flex bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full">
          <span className="hidden w-12 md:flex">Need Help</span>
          <span>?</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
