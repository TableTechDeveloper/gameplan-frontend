import React, { useContext } from 'react';
import Logo from './Logo';
import { ModalContext } from '../pages/_TemplatePage';
import '../styles/Header.css';
import SignUpModal from '../modals/SignUpModal';
import LoginModal from '../modals/LoginModal';


const HomeHeader = () => {
  const { openModal } = useContext(ModalContext);

  const handleLoginClick = () => {
    console.log("Login button clicked");
    openModal(<LoginModal />);
  };

  const handleSignUpClick = () => {
    console.log("SignUp button clicked");
    openModal(<SignUpModal />);
  };

  return (
    <header className="home-header">
      <Logo />
      <button id="login" onClick={handleLoginClick}>Login</button>
      <button id="signup" onClick={handleSignUpClick}>Sign Up</button>
    </header>
  );
};

export default HomeHeader;
