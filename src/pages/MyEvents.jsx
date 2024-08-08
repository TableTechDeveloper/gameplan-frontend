import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import useFetchEvents from "../functions/useFetchEvents";
import UpcomingEventCard from "../components/UpcomingEventCard";


const MyEvents = () => {
    const { user, loading: userLoading } = useContext(UserContext);
    const { events, loading, error } = useFetchEvents(true);

    if (loading || userLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="my-events">
            <h2>My Events</h2>
            <p>Welcome, {user ? user.username : 'Guest'}!</p>
            <NavLink to="/discoverevents">
                <button className="button-primary">Discover Events</button>
            </NavLink>
            <h3>Hosted Events:</h3>
            <div className="event-list">
                {events.map(event => (
                    <UpcomingEventCard key={event._id} event={event} />
                ))}
            </div>
        </section>
    );
};

export default MyEvents;
