// HomePage.jsx
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";
import { ModalContext } from "../pages/_TemplatePage";
import graphic from "../assets/graphic.svg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { openModal } = useContext(ModalContext);
  const location = useLocation();

  const handleRegisterClick = () => {
    console.log("Register button clicked");
    openModal(<RegisterModal />);
  };

  useEffect(() => {
    if (location.state && location.state.showLoginModal) {
      openModal(<LoginModal />);
    }
  }, [location.state]);

  // This version fixes the ESLint but causes infinite loop on browser app
  // useEffect(() => {
  //   if (location.state && location.state.showLoginModal) {
  //     openModal(<LoginModal />);
  //   }
  // }, [location.state, openModal]);

  return (
    <section className="HomePage">
      <h1>GamePlan Tagline!</h1>
      <p>
        GamePlan blurb about the app blurb about the app blurb about the app
        blurb about the app blurb about the app blurb about the app
      </p>
      <button className="button-primary" onClick={handleRegisterClick}>
        Register
      </button>
      <img src={graphic} alt="placeholder" />
      <NavLink to="/dashboard">
        <button className="button-secondary">Go to Dashboard</button>
      </NavLink>
    </section>
  );
};

export default HomePage;
