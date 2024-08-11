import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatDateTime } from '../utils/dateUtils';
import "../styles/Card.css";

const UpcomingEventCard = ({ event, onLeaveEvent }) => {
    const formattedDate = formatDateTime(event.eventDate);

    const username = event?.host?.username;

    if (!username) {
        return <div>Username is missing</div>; // or handle this case in a more user-friendly way
    }

    // console.log("Username: ", event.host.username);
    

    return (
        <NavLink to={`/events/${event._id}`} className="card-link">
            <div className="card">
                <div className="card-info">
                    <h3>{event.title}</h3>
                    <p>Host: {event.host.username}</p>
                    <p>{formattedDate}</p>
                    <p>{event.location}</p>
                    <p>Players: {event.participants.length}/{event.maxParticipants}</p>
                </div>
                <div className="card-image" style={{ backgroundImage: `url("${event.gameImage}")` }}></div>
                <div className="card-button">
                <button className="button-primary">
                    View Event
                </button>
                </div>
            </div>
        </NavLink>
    );
};

export default UpcomingEventCard;
