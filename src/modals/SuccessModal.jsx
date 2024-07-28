// SuccessModal.jsx
import React from 'react';
import '../styles/Modal.css';

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
