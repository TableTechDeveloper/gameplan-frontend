import React from 'react';
import "../styles/Card.css"

const DraftEventCard = () => {
    return (
        
        <div className='card draft-event'>
            <div>
                <h3>Event Name</h3>
                <p>Date and Time</p>
                <p>Location</p>
            </div>
            <div className='game-image'>image</div>
            <button>Edit Event</button>
            <button className="unfilled-button">Discard Event</button>
        </div>

    );
};

export default DraftEventCard;