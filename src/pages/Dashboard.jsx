import React, { useEffect, useState } from "react";
import useFetchEvents from "../functions/useFetchEvents";
import UpcomingEventCard from "../components/UpcomingEventCard";
import UserIcon from "../components/UserIcon";
import { NavLink } from "react-router-dom";
import axios from "../axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  console.log("User Data:", userData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Handle case where user is not logged in (redirect to login page)
          return;
        }

        const response = await axios.get(`/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        console.log("Fetched user data:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error (display error message)
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred while fetching user data.");
        }
      }
    };

    fetchUserData();
  }, []);
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
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display error message if there is an error */}
    </section>
  );
};

export default Dashboard;
