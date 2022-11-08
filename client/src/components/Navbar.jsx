import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { Profile } from "./Profile";
import {useAuth0} from "@auth0/auth0-react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const {user,isAuthenticated}= useAuth0();

  return (

    !!isAuthenticated && (
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
       
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
       
          <div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
<Profile />

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              logoout
              <LogoutButton/>
            </li>

          </ul>

        </nav>
        
        </div>
    
      </IconContext.Provider>
    
    )
);
}
