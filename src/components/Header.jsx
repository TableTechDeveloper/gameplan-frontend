// Header.jsx - for use on all pages other than the homepage
import React from 'react';
import "../styles/Header.css";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Header = ({ isOpen, toggleMenu, setIsMenuOpen }) => {
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <header className="header">
      <div className="header-content">
        <Logo closeMenu={closeMenu} />
        <Hamburger isOpen={isOpen} onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;