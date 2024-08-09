import React from 'react';
import bluepiece from "../assets/bluepiece.svg";
import redpiece from "../assets/redpiece.svg";
import { NavLink } from 'react-router-dom';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            
            <img src={bluepiece} alt="blue game piece" className="img-bluepiece"/>
            <NavLink to="/dashboard">
                <h3>GAMEPLAN</h3>
            </NavLink>
            <img src={redpiece} alt="red game piece" className="img-redpiece"/>

        </footer>
    );
};

export default Footer;