import React, { useContext } from "react";
import Logo from "./Logo";
import { ModalContext } from "../pages/_TemplatePage";
import "../styles/Header.css";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";

const HomeHeader = () => {
  const { openModal } = useContext(ModalContext);

  const handleLoginClick = () => {
    console.log("Login button clicked");
    openModal(<LoginModal />);
  };

  const handleRegisterClick = () => {
    console.log("Register button clicked");
    openModal(<RegisterModal />);
  };

  return (
    <header className="home-header">
      <Logo />
      <button id="login" onClick={handleLoginClick}>
        Login
      </button>
      <button id="Register" onClick={handleRegisterClick}>
        Sign Up
      </button>
    </header>
  );
};

export default HomeHeader;
