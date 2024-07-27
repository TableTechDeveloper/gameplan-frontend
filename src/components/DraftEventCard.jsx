import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Card.css"

const DraftEventCard = () => {
    return (
        
        <div className="card">
            <div>
                <h3>Event Name</h3>
                <p>Date and Time</p>
                <p>Location</p>
                <NavLink to="/newevent">
                    <button className="button-secondary">Edit Event</button>
                </NavLink>
                <button className="button-cancel">Discard Event</button>
            </div>
            <div className='game-image'>image</div>
        </div>

    );
};

export default DraftEventCard;