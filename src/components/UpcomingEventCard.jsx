import React from 'react';
import "../styles/Card.css"

const UpcomingEventCard = () => {
    return (
        
        <div className='card upcoming-event'>
            <div>
                <h3>Event Name</h3>
                <p>Date and Time</p>
                <p>Location</p>
                <p>Host</p>
                <p>Players</p>
            </div>
            <div className='game-image'>image</div>
            <button>Edit Event</button>
            <button className="unfilled-button">Leave Event</button>
        </div>

    );
};

export default UpcomingEventCard;