import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import ConfirmModal from "../modals/ConfirmModal"
import { NavLink } from 'react-router-dom';
import "../styles/Card.css"

const UpcomingEventCard = () => {
    const { openModal } = useContext(ModalContext);

    const handleLeaveEvent = () => {
        // Logic for joining the event
        openModal(<ConfirmModal message="leave this event" />);
    };

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
                <button className="button-cancel" onClick={handleLeaveEvent}>Leave Event</button>
            </div>
            <div className='game-image'>image</div>
        </div>

    );
};

export default UpcomingEventCard;