import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Card.css"

const UpcomingEventCard = () => {
    return (
        
        <div className='card'>
            
            <div>
                <h3>Event Name</h3>
                <p>Date and Time</p>
                <p>Location</p>
                <p>Host</p>
                <p>Players</p>
                <div>Edit Event</div>
                <div>Leave Event</div>
                <NavLink to="/newevent">
                    <button className="button-secondary">Edit Event</button>
                </NavLink>
                <button className="button-cancel">Leave Event</button>
            </div>
            <div className='game-image'>image</div>
        </div>

    );
};

export default UpcomingEventCard;