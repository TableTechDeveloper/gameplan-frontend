import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../pages/_TemplatePage';

const SignUpModal = () => {
  const { closeModal } = useContext(ModalContext);

  const handleGoToDashboardClick = () => {
    closeModal(); // Close the modal
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <NavLink to="/dashboard">
        <button onClick={handleGoToDashboardClick}>Go to Dashboard</button>
      </NavLink>
    </div>
  );
};

export default SignUpModal;
