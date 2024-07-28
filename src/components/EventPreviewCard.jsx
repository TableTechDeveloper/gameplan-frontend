import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import { NavLink } from 'react-router-dom';
import "../styles/Card.css"

const EventPreviewCard = () => {
    const { openModal } = useContext(ModalContext);

    const handleJoinEvent = () => {
        // Logic for joining the event
        openModal(<SuccessModal message="You have joined this event!" />);
    };
    
    return (
        
        <div className='card'>
            <div>
                <NavLink to="/eventpage">
                <h3>Event Name</h3>
                </NavLink>
                <p>Date and Time</p>
                <button className="button-primary" onClick={handleJoinEvent}>Join Event</button>
            </div>
            <div className='game-image'>image</div>
        </div>

    );
};

export default EventPreviewCard;