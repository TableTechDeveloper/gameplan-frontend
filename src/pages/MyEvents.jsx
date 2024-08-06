import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetchEvents from "../functions/useFetchEvents";
import UpcomingEventCard from "../components/UpcomingEventCard";
import { API_BASE_URL, getToken } from '../config';

const MyEvents = () => {
    const token = getToken();

    const { events, loading: eventsLoading, error: eventsError } = useFetchEvents(API_BASE_URL, token);
    

    if (eventsLoading) {
        return <div>Loading...</div>;
    }

    if (eventsError) {
        return <div>{eventsError}</div>;
    }

       
    return (
        <section className="MyEvents">
            <h2>My Events:</h2>
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
                        // onLeaveEvent={handleLeaveEvent}
                    />
                ))}
            </div>
        </section>
    );
};

export default MyEvents;
