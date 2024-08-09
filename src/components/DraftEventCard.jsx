import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import ConfirmModal from "../modals/ConfirmModal"
import { NavLink } from 'react-router-dom';
import "../styles/Card.css"

const DraftEventCard = () => {
    const { openModal } = useContext(ModalContext);

    const handleDiscardEvent = () => {
        openModal(<ConfirmModal message="discard this event" />);
    };
    
    return (
        
        <div className="card">
            <div>
                <h3>Event Name</h3>
                <p>Date and Time</p>
                <p>Location</p>
                <NavLink to="/newevent">
                    <button className="button-secondary">Edit Event</button>
                </NavLink>
                <button className="button-cancel" onClick={handleDiscardEvent}>Discard Event</button>
            </div>
            <div className='card-image'>image</div>
        </div>

    );
};

export default DraftEventCard;