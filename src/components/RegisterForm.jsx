// RegisterForm.js
import React, { useState } from "react";
import axios from "../axios"; // axios instance is imported from axios.js
// import { API_BASE_URL } from "../config";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  // const API_BASE_URL = process.env.REACT_APP_SERVER_URL; *use top import instead
  // ${API_BASE_URL}

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent event bubbling

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        // `${API_BASE_URL}/user/register`,
        // `https://gameplan-backend.onrender.com/user/register`,
        `/user/register`,
        {
          username,
          email,
          password,
          location,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Register successful:", response.data);

      const data = await response.data;
      const token = data.jwt;

      // Store the token in localStorage
      localStorage.setItem("token", token);
      console.log(
        "Token stored in localStorage:",
        localStorage.getItem("token")
      );

      // Clear form data so it is clear to user that registration is successfully submitted
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLocation("");
      setError(null);

      // Handle successful register (e.g., store token, redirect user)
    } catch (error) {
      console.error("Error signing up:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message); // Display error message from backend
      } else {
        setError("An error occurred while signing up. Please try again."); // Display generic error message
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display error message if there is an error */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
