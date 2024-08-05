import React, { useContext } from "react";
import { ModalContext } from "../pages/_TemplatePage";
import LoginModal from "./LoginModal";
import RegisterForm from "../components/RegisterForm";

const RegisterModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);

  const handleLoginClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<LoginModal />);
  };

  return (
    <div>
      <p>
        Already a member?{" "}
        <span className="small-link" onClick={handleLoginClick}>
          Login!
        </span>
      </p>
      <RegisterForm />
    </div>
  );
};

export default RegisterModal;
