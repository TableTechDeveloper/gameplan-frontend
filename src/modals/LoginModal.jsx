import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../pages/_TemplatePage';

const LoginModal = () => {
  const { closeModal } = useContext(ModalContext);

  const handleGoToDashboardClick = () => {
    closeModal(); // Close the modal
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button className="button-primary" type="submit">Login</button>
      </form>
      <NavLink to="/dashboard">
        <button className="button-secondary" onClick={handleGoToDashboardClick}>Go to Dashboard</button>
      </NavLink>
    </div>
  );
};

export default LoginModal;
