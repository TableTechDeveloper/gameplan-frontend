// Header.jsx - for use on all pages other than the homepage
import React from 'react';
import "../styles/Header.css";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Header = ({ isOpen, toggleMenu }) => {
  return (
    <header className="header">
      <Logo />
      <Hamburger isOpen={isOpen} onClick={toggleMenu} />
    </header>
  );
};

export default Header;