import React from 'react'
import {Link} from "react-router-dom"
//ICON//
import {LuBox,LuUser,LuMessageSquare,LuCalendar} from 'react-icons/lu'
import {FaSuitcase} from 'react-icons/fa'
import { MdLocalGasStation } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import {TbUsers} from 'react-icons/tb'
import { HiViewBoards } from "react-icons/hi"
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarRear } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
//ICON//

const Sidebar = () => {
  const SIDEBAR_LINKS=[
    {id:1, path:"/Layout",name:"Tableau de bord", icon:HiViewBoards},
    {id:2, path:"/Members",name:"Members", icon:LuUser},
    {id:3, path:"/Personnel",name:"Personnel", icon:TbUsers},
    {id:4, path:"/Vehicules",name:"Vehicules", icon:FaCarRear},
    {id:5, path:"/Recharge Carburant",name:"Recharge Carburant", icon:MdLocalGasStation},
    {id:6, path:"/Réparation",name:"Réparation", icon:BiSolidCarMechanic },
    {id:7, path:"/Rapports",name:"Rapports", icon:CgNotes},
    {id:8, path:"/Déconnection",name:"Déconnection", icon:PiSignOutBold},
  ];
  return <div className='side w-18 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 '>
      {/* logo*/}
      <div className='mb-8'>
        <img src="rm.png" alt="logo" className='w-12 hidden md:flex'/>
      </div>
      {/* logo*/}

      {/*Navigation Links*/}
      <ul>
        {SIDEBAR_LINKS.map((link,index)=>(
          <li>
            <Link>
            <span>{link.icon()}</span>
            <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/*Navigation Links*/}
    <div>
      <p> 
        {" "}
        <span>Need Help</span><span>?</span>
        </p>
    </div>
    
    
    </div>
  
}

export default Sidebar;