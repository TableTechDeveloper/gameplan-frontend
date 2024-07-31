// SuccessModal.jsx
import React from 'react';
import '../styles/Modal.css';

const FailModal = ({ message }) => {
  return (
    
    <div className="fail-popup">
        <h2>Fail!</h2>
        <h3>{message}</h3>
    </div>
      
  );
};

export default FailModal;
