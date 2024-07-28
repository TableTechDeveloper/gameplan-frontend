// ConfirmModal.jsx
import React from 'react';
import '../styles/Modal.css';

const ConfirmModal = ({ message }) => {
  return (
    
    <div className="confirm-popup">
        <h3>Are you sure you want to {message}?</h3>
        <button className="button-cancel">Confirm</button>
    </div>
      
  );
};

export default ConfirmModal;
