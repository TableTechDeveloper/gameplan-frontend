import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import SignUpModal from '../modals/SignUpModal';
import ResetPasswordModal from './ResetPasswordModal';

const LoginModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);

  
  const handleSignUpClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    closeModal(); // Close the current modal
    openModal(<SignUpModal />); // Open the sign-up modal
  };

  const handleForgotPasswordClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    closeModal(); // Close the current modal
    openModal(<ResetPasswordModal />); // Open the sign-up modal
  }

  return (
    <div>
      <p>Not a member yet? <span className="small-link" onClick={handleSignUpClick}>Sign Up!</span></p>
      
      <form>

        <div className="form-field">
            <label for="email">Email:</label>
            <input type="email" name="email" required />
        </div>

        <div className="form-field">
            <label for="password">Password:</label>
            <input type="password" name="password" required />
        </div>

        <div className="form-field">
            <label for="password">Confirm Password:</label>
            <input type="password" name="confirm-password" required />
        </div>

        <p className="small-link" onClick={handleForgotPasswordClick}>Forgot Password?</p>
        
        <button className="button-primary" type="submit">Login</button>
      
      </form>
      
    </div>
  );
};

export default LoginModal;
