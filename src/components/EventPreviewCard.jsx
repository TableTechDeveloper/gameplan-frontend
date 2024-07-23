import React from 'react';
import "../styles/Card.css"

const EventPreviewCard = () => {
    return (
        
        <div className='card'>
            <div>
                <h3>Event Name</h3>
                <p>Date and Time</p>
            </div>
            <div className='game-image'>image</div>
        </div>

    );
};

export default EventPreviewCard;