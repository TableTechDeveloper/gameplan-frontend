import React from 'react';
import useFetchEvents from "../functions/useFetchEvents";
import useFetchUser from "../functions/useFetchUser";
import UpcomingEventCard from "../components/UpcomingEventCard";


const Dashboard = () => {

    const { events, loading: eventsLoading, error: eventsError } = useFetchEvents(false); // Set hosted to false
    const { user, loading: userLoading, error: userError } = useFetchUser();

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
