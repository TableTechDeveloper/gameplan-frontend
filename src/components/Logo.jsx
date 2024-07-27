import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to="/">
            <div className="logo">
                <h5>LOGO</h5>
            </div>
        </NavLink>
    );
};

export default Logo;