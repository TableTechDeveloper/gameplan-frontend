import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetchPublicEvents from '../functions/useFetchPublicEvents';
import UserIcon from '../components/UserIcon';
import UpcomingEventCard from "../components/UpcomingEventCard";

const DiscoverEvents = () => {
    const { events, loading: eventsLoading, error: eventsError } = useFetchPublicEvents();

    if (eventsLoading) {
        return <div>Loading...</div>;
    }

    if (eventsError) {
        return <div>{eventsError}</div>;
    }

    return (
        <section className="page-section">
            <div className="page-top">
                <div>
                    <h1>Discover Events:</h1>
                    <UserIcon />
                </div>
                <div className="page-buttons">
                    <NavLink to="/newevent">
                        <button className="button-primary">New Event</button>
                    </NavLink>
                </div>
            </div>
            <div className="page-content">
                <h3>Upcoming events:</h3>
                {events.map(event => (
                    <UpcomingEventCard 
                        key={event._id}
                        event={event}
                    />
                ))}
            </div>
        </section>
    );
};

export default DiscoverEvents;
