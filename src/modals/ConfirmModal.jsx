// ConfirmModal.jsx
import React from 'react';
import '../styles/Modal.css';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirm-popup">
      <h3>{message}</h3>
      <button className="button-cancel" onClick={onConfirm}>Confirm</button>
      <button className="button-cancel" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ConfirmModal;

