import React from 'react';
import { NavLink } from 'react-router-dom';
import dice from "../assets/dice.svg";

const Logo = ({ toggleMenu }) => {
    const handleClick = () => {
        toggleMenu(); // Close the nav-menu when the logo is clicked
      };
    
    return (
        <NavLink to="/dashboard" onClick={handleClick}>
            <div className="logo">
                <img src={dice} alt="placeholder" id="header-logo"/>
            </div>
        </NavLink>
    );
};

export default Logo;