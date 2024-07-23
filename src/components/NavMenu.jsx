import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/NavMenu.css";

const NavMenu = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <div id="nav-links">
        <NavLink to="/" onClick={() => toggleMenu(false)}>Home</NavLink>
        <NavLink to="/dashboard" onClick={() => toggleMenu(false)}>Dashboard</NavLink>
        <NavLink to="/editprofile" onClick={() => toggleMenu(false)}>Edit Profile</NavLink>
        <NavLink to="/gamesowned" onClick={() => toggleMenu(false)}>Games Owned</NavLink>
        <NavLink to="/discovergames" onClick={() => toggleMenu(false)}>Discover Games</NavLink>
        <NavLink to="/myevents" onClick={() => toggleMenu(false)}>My Events</NavLink>
        <NavLink to="/mydrafts" onClick={() => toggleMenu(false)}>My Drafts</NavLink>
        <NavLink to="/discoverevents" onClick={() => toggleMenu(false)}>Discover Events</NavLink>
        <NavLink to="/" onClick={() => toggleMenu(false)}>Logout</NavLink>
        <button>
        <NavLink to="/newevent" onClick={() => toggleMenu(false)}>New Event</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default NavMenu;