import React, { useContext } from "react";
import { ModalContext } from "../pages/_TemplatePage";
import RegisterModal from "../modals/RegisterModal";
import ResetPasswordModal from "./ResetPasswordModal";
import LoginForm from "../components/LoginForm";

const LoginModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);

  const handleRegisterClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<RegisterModal />);
  };

  const handleForgotPasswordClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<ResetPasswordModal />);
  };

  return (
    <div>
      <p>
        Not a member yet?{" "}
        <span className="small-link" onClick={handleRegisterClick}>
          Sign Up!
        </span>
      </p>

      <LoginForm />

      <p className="small-link" onClick={handleForgotPasswordClick}>
        Forgot Password?
      </p>
    </div>
  );
};

export default LoginModal;
