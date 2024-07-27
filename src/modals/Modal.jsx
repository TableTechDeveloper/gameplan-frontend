import React from 'react';
import '../styles/Modal.css';

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-button" onClick={onClose}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;