import React, { useEffect, userState } from "react";
import axios from "axios";
import EventPreviewCard from "../components/EventPreviewCard";

const Dashboard = () => {
  const [user, setUser] = userState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Handle case where user is not logged in (redirect to login page)
          return;
        }

        const response = await axios.get(
          `https://gameplan-backend.onrender.com/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error (display error message)
      }
    };

    fetchUserData();
  }, []);

  return (
    <section className="dashboard">
      <div>
        {user ? (
          <h2>Welcome {user.username}</h2>
        ) : (
          <h2>You are not welcome here! I must protect my routes</h2> // Temporary message to show a non logged in user on dashboard without protected routes
        )}
        <p>Your upcoming games:</p>
      </div>
      <div className="upcoming-games">
        <EventPreviewCard />
        <EventPreviewCard />
        <EventPreviewCard />
      </div>
    </section>
  );
};

export default Dashboard;
