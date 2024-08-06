import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import useFetchSingleEvent from "../functions/useFetchSingleEvent";
import useFetchUser from '../functions/useFetchUser';
import CancelEventButton from '../components/CancelEventButton';
import JoinEventButton from '../components/JoinEventButton';
import LeaveEventButton from '../components/LeaveEventButton';
import { formatDateTime } from '../utils/dateUtils';
import "../styles/EventPage.css";

const EventPage = () => {
    const { id } = useParams();
    const { event, loading: eventLoading, error: eventError, fetchEvent } = useFetchSingleEvent(id);
    const { user, loading: userLoading, error: userError } = useFetchUser();

    if (eventLoading || userLoading) return <p>Loading...</p>;
    if (eventError || userError) return <p>{eventError || userError}</p>;
    if (!event) return <p>Event not found.</p>;

    const isHost = user && event.host && user._id === event.host._id;
    const formattedDate = formatDateTime(event.eventDate);

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
            <p>{formattedDate}</p>
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
                    <JoinEventButton eventId={id} eventTitle={event.title} refreshEvent={fetchEvent} />
                    <LeaveEventButton eventId={id} eventTitle={event.title} refreshEvent={fetchEvent} />
                </>
            )}
        </section>
    );
};

export default EventPage;
