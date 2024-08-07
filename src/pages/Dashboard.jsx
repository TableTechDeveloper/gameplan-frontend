import React, { useEffect, useState } from "react";
import axios from "../axios";
import EventPreviewCard from "../components/EventPreviewCard";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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

        setUser(response.data);
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

  return (
    <section className="dashboard">
      <div>
        <h2>Welcome {user ? user.username : "Guest"}</h2>
        <p>Your upcoming games:</p>
      </div>
      <div className="upcoming-games">
        <EventPreviewCard />
        <EventPreviewCard />
        <EventPreviewCard />
      </div>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display error message if there is an error */}
    </section>
  );
};

export default Dashboard;
