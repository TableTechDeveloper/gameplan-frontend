import React, { useContext } from "react";
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
      <div className="home-header-buttons">
        <button className="button-secondary" onClick={handleLoginClick}>
          Login
        </button>
        <button className="button-primary" onClick={handleRegisterClick}>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
