import React, { useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import ConfirmModal from '../modals/ConfirmModal';
import useFetchSingleEvent from "../functions/useFetchSingleEvent"
import "../styles/EventPage.css"

const EventPage = () => {
    const { id } = useParams();
    const { openModal } = useContext(ModalContext);
    const { event, loading, error } = useFetchSingleEvent(id);
    
    const handleJoinEvent = () => {
        openModal(<SuccessModal message="You have joined this event!" />);
    };

    const handleLeaveEvent = () => {
        openModal(<ConfirmModal message="leave this event" />);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!event) return <p>Event not found.</p>;

    return (
        <section className="EventPage">
            <div className="event-header">
                <div className="event-details">
                    <h1>{event.title}</h1>
                    <div id="host-details">
                        <div id="profile-photo"></div>
                        <div id="host-name">
                            <h3>Hosted By:</h3>
                            <p>{event.host && event.host.username}</p>
                        </div>
                    </div>
                </div>
                <div className="traffic-light">traffic light</div>
            </div>
            <div className="game-image" id="eventpage-gameimage">
                {event.gameImage && <img src={event.gameImage} alt={`${event.title} cover`} />}
            </div>
            <h3>Date & Time:</h3>
            <p>{new Date(event.createdAt).toLocaleString()}</p>
            <h3>Location:</h3>
            <p>{event.location}</p>
            <h3>Info:</h3>
            <p>{event.info}</p>
            <h3>Guests Attending:</h3>
            {event.participants && event.participants.map(participant => (
                <p key={participant._id}>{participant.username}</p>
            ))}
            <h3>Free Spots:</h3>
            <p>{event.maxParticipants - event.participants.length}</p>
            <button className="button-primary" onClick={handleJoinEvent}>Join Event</button>
            <button className="button-cancel" onClick={handleLeaveEvent}>Leave Event</button>
            <NavLink to={`/events/edit/${event._id}`}>
                <div className="edit-link">Edit Event</div>
            </NavLink>
            <div className="cancel-link">Cancel Event</div>
        </section>
    );
};

export default EventPage;
