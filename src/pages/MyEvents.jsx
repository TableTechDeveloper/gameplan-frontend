import React from 'react';
import { NavLink } from 'react-router-dom';
import UserIcon from '../components/UserIcon';
import useFetchEvents from "../functions/useFetchEvents";
import UpcomingEventCard from "../components/UpcomingEventCard";


const MyEvents = () => {
    const { events, loading, error } = useFetchEvents(true);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="page-section">
            <div className="page-top">
                <div>
                    <h1>My Events:</h1>
                    <UserIcon />
                </div>
                <div className="page-buttons"> 
                    <NavLink to="/discoverevents">
                        <button className="button-primary">Discover Events</button>
                    </NavLink>
                    <NavLink to="/newevent">
                        <button className="button-secondary">New Event</button>
                    </NavLink>
                </div>
            </div>
            <div className="page-content">
                <h3>Hosted Events:</h3>
                <div className="event-list">
                    {events.map(event => (
                        <UpcomingEventCard 
                        key={event._id} 
                        event={event} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default MyEvents;
