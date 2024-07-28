import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({ toggleMenu }) => {
    const handleClick = () => {
        toggleMenu(); // Close the nav-menu when the logo is clicked
      };
    
    return (
        <NavLink to="/" onClick={handleClick}>
            <div className="logo">
                <h5>LOGO</h5>
            </div>
        </NavLink>
    );
};

export default Logo;