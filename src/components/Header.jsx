import React, { useState } from 'react';
import "../styles/Header.css";
import Hamburger from "./Hamburger";
import NavMenu from './NavMenu';
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
        <Logo/>
        <Hamburger isOpen={isOpen} onClick={toggleMenu} />
        <NavMenu isOpen={isOpen} toggleMenu={setIsOpen} />
    </header>
  );
};

export default Header;