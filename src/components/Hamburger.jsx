import React from 'react';
import '../styles/Hamburger.css';

const Hamburger = ({ isOpen, onClick }) => {
    
    return (
        <div className={`hamburger ${isOpen ? 'change' : ''}`} onClick={onClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
};

export default Hamburger;
