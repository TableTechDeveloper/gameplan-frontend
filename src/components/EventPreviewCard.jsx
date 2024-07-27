import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Card.css"

const EventPreviewCard = () => {
    return (
        
        <NavLink to="/eventpage">
            <div className='card'>
                <div>
                    <h3>Event Name</h3>
                    <p>Date and Time</p>
                    <button className="button-primary">Join Event</button>
                </div>
                <div className='game-image'>image</div>
            </div>
        </NavLink>

    );
};

export default EventPreviewCard;