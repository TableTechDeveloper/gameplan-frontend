import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetchPublicEvents from '../functions/useFetchPublicEvents';
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
        <section className="MyEvents">
            <h2>Discover Events:</h2>
            <div>
                <NavLink to="/newevent">
                    <button className="button-primary">New Event</button>
                </NavLink>
                <NavLink to="/mydrafts">
                    <button className="button-secondary">View Drafts</button>
                </NavLink>
            </div>
            <h2>Upcoming events:</h2>
            <div>
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
