import React from "react";
import useFetchEvents from "../functions/useFetchEvents";
import UpcomingEventCard from "../components/UpcomingEventCard";
import UserIcon from "../components/UserIcon";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const {
    events,
    loading: eventsLoading,
    error: eventsError,
  } = useFetchEvents(false); // Set hosted to false

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
          <h1>Dashboard:</h1>
          <UserIcon />
        </div>
        <div className="page-buttons">
          <NavLink to="/newevent">
            <button className="button-primary">New Event</button>
          </NavLink>
        </div>
      </div>
      <div className="page-content">
        <h2>Your upcoming events:</h2>
        {events.map((event) => (
          <UpcomingEventCard key={event._id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
