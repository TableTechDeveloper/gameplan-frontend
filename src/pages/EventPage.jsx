import React, { useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import ConfirmModal from '../modals/ConfirmModal';
import useFetchSingleEvent from "../functions/useFetchSingleEvent";
import useFetchUser from '../functions/useFetchUser'; // Import useFetchUser
import CancelEventButton from '../components/CancelEventButton';
import "../styles/EventPage.css";

const EventPage = () => {
    const { id } = useParams();
    const { openModal } = useContext(ModalContext);
    const { event, loading: eventLoading, error: eventError } = useFetchSingleEvent(id);
    const { user, loading: userLoading, error: userError } = useFetchUser(); // Use useFetchUser to get current user
    
    const handleJoinEvent = () => {
        openModal(<SuccessModal message="You have joined this event!" />);
    };

    const handleLeaveEvent = () => {
        openModal(<ConfirmModal message="leave this event" />);
    };

    if (eventLoading || userLoading) return <p>Loading...</p>;
    if (eventError || userError) return <p>{eventError || userError}</p>;
    if (!event) return <p>Event not found.</p>;

    console.log("Current user:", user);
    console.log("Event host:", event.host);

    console.log("Current user:", user);
    console.log("Event host:", event.host);
    console.log("Current user ID:", user ? user._id : "No user ID");
    console.log("Event host ID:", event.host ? event.host._id : "No event host ID");

    const isHost = user && event.host && user._id === event.host._id;
    console.log("Is current user the host?", isHost);

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
            {isHost ? (
                <>
                    <NavLink to={`/events/edit/${event._id}`}>
                        <button className="button-secondary">Edit Event</button>
                    </NavLink>
                    <CancelEventButton eventId={id} />
                </>
            ) : (
                <>
                    <button className="button-primary" onClick={handleJoinEvent}>Join Event</button>
                    <button className="button-cancel" onClick={handleLeaveEvent}>Leave Event</button>
                </>
            )}
        </section>
    );
};

export default EventPage;
