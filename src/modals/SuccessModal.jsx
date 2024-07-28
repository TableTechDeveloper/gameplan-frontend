// SuccessModal.jsx
import React from 'react';
import '../styles/Modal.css';

const SuccessModal = ({ message }) => {
  return (
    
    <div className="success-popup">
        <h2>Success!</h2>
        <h3>{message}</h3>
    </div>
      
  );
};

export default SuccessModal;
