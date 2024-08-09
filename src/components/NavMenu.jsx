import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavMenu.css";
import Logout from "./Logout";

const NavMenu = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
      <div id="nav-links">
        <NavLink to="/dashboard" onClick={() => toggleMenu(false)}>
          Dashboard
        </NavLink>
        <NavLink to="/editprofile" onClick={() => toggleMenu(false)}>
          Edit Profile
        </NavLink>
        <NavLink to="/gamesowned" onClick={() => toggleMenu(false)}>
          My Games
        </NavLink>
        <NavLink to="/myevents" onClick={() => toggleMenu(false)}>
          My Events
        </NavLink>
        <NavLink to="/discovergames" onClick={() => toggleMenu(false)}>
          Discover Games
        </NavLink>
        <NavLink to="/discoverevents" onClick={() => toggleMenu(false)}>
          Discover Events
        </NavLink>
        <NavLink
          to="/"
          onClick={() => {
            Logout();
            toggleMenu(false);
          }}
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default NavMenu;
