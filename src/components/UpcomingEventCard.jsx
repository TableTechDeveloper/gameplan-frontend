import React from 'react';
// import { ModalContext } from '../pages/_TemplatePage';
// import ConfirmModal from "../modals/ConfirmModal";
import { NavLink } from 'react-router-dom';
import "../styles/Card.css";

const UpcomingEventCard = ({ event, onLeaveEvent }) => {
    // const { openModal } = useContext(ModalContext);

    // const handleLeaveEvent = () => {
    //     openModal(
    //         <ConfirmModal 
    //             message="leave this event"
    //             onConfirm={() => {
    //                 onLeaveEvent(event._id);
    //                 openModal(null); // Close the modal
    //             }}
    //             onCancel={() => openModal(null)} // Close the modal
    //         />
    //     );
    // };

    return (
        <NavLink to={`/events/${event._id}`} className="card-link">
            <div className='card'>
                <div>
                    <h3>{event.title}</h3>
                    <p>{new Date(event.eventDate).toLocaleString()}</p>
                    <p>{event.location}</p>
                    <p>Host: {event.host.username}</p>
                    <p>Players: {event.participants.length}/{event.maxParticipants}</p>
                    {/* <NavLink to={`/events/edit/${event._id}`}>
                        <button className="button-secondary">Edit Event</button>
                    </NavLink>
                    <button className="button-cancel" onClick={handleLeaveEvent}>Leave Event</button> */}
                </div>
                <div className='game-image'>
                    {event.gameImage ? <img src={event.gameImage} alt={`${event.title} cover`} /> : 'No image available'}
                </div>
            </div>
        </NavLink>
    );
};

export default UpcomingEventCard;
