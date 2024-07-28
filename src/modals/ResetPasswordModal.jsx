import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import LoginModal from './LoginModal';

const ResetPasswordModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<LoginModal />);
  }

  return (
    <div>
      <h2>Reset your password:</h2>
      <form>
        
        <div className="form-field">
          <label for="username">Username:</label>
          <input type="username" name="username" required />
        </div>

        <div className="form-field">
          <label for="newPassword">New Password:</label>
          <input type="newPassword" name="newPassword" required />
        </div>

        <div className="form-field">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="confirmPassword" name="confirmPassword" required />
        </div>
        
        <button className="button-primary" type="submit" onClick={handleResetPasswordClick}>Reset Password</button>
      
      </form>
    </div>
  );
};

export default ResetPasswordModal;
