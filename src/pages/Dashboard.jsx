import React from 'react';
import useFetchEvents from "../functions/useFetchEvents";
import useFetchUser from "../functions/useFetchUser";
import UpcomingEventCard from "../components/UpcomingEventCard";
import { API_BASE_URL, getToken } from '../config';

const Dashboard = () => {
    const token = getToken();

    const { events, loading: eventsLoading, error: eventsError } = useFetchEvents(API_BASE_URL, token);
    const { user, loading: userLoading, error: userError } = useFetchUser(API_BASE_URL, token);

    if (eventsLoading || userLoading) {
        return <div>Loading...</div>;
    }

    if (eventsError) {
        return <div>{eventsError}</div>;
    }

    if (userError) {
        return <div>{userError}</div>;
    }

    return (
        <section className="dashboard">
            <div>
                <h2>Welcome {user ? user.username : 'Guest'}</h2>
                <p>Your upcoming games:</p>
            </div>
            <div className="upcoming-games">
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

export default Dashboard;
