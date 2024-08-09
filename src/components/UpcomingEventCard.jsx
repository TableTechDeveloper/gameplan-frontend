import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatDateTime } from '../utils/dateUtils';
import "../styles/Card.css";

const UpcomingEventCard = ({ event, onLeaveEvent }) => {
    const formattedDate = formatDateTime(event.eventDate);

    return (
        <NavLink to={`/events/${event._id}`} className="card-link">
            <div className='card'>
                <div className='card-info'>
                    <h3>{event.title}</h3>
                    <h4>Host: {event.host.username}</h4>
                    <p>{formattedDate}</p>
                    <p>{event.location}</p>
                    <p>Players: {event.participants.length}/{event.maxParticipants}</p>
                </div>
                <div className='game-image'>
                    {event.gameImage ? <img src={event.gameImage} alt={`${event.title} cover`} /> : 'No image available'}
                </div>
            </div>
        </NavLink>
    );
};

export default UpcomingEventCard;
