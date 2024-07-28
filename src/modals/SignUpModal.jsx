import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import LoginModal from './LoginModal';

const SignUpModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);

  const handleLoginClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<LoginModal />);
  }

  return (
    <div>
      
      <p>Already a member? <span className="small-link" onClick={handleLoginClick}>Login!</span></p>
      
      <form>
        
      <div className="form-field">
            <label for="email">Email:</label>
            <input type="email" name="email" required />
        </div>
        
        <div className="form-field">
            <label for="password">Password:</label>
            <input type="password" name="password" required />
        </div>
        
        
        <button className="button-primary" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpModal;
