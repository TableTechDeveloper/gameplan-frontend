import React, { useContext, useState } from "react";
import axios from "../axios";
import { ModalContext } from "../pages/_TemplatePage";
import LoginModal from "./LoginModal";
// import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);
  // const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [securityQuestionOne, setSecurityQuestionOne] = useState("");
  const [securityQuestionTwo, setSecurityQuestionTwo] = useState("");
  const [securityQuestionThree, setSecurityQuestionThree] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent event bubbling

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `/user/register`,
        {
          username,
          email,
          password,
          location,
          securityQuestionOne,
          securityQuestionTwo,
          securityQuestionThree,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Register successful:", response.data);

      // Clear form data so it is clear to user that registration is successfully submitted
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLocation("");
      setSecurityQuestionOne("");
      setSecurityQuestionTwo("");
      setSecurityQuestionThree("");
      setError(null);

      closeModal();
      openModal(<LoginModal />);
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

  const handleLoginClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<LoginModal />);
  };

  return (
    <div>
      <p>
        Already a member?{" "}
        <span className="small-link" onClick={handleLoginClick}>
          Login!
        </span>
      </p>

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
        <div>
          <label>Security Question 1:</label>
          <input
            type="text"
            value={securityQuestionOne}
            onChange={(e) => setSecurityQuestionOne(e.target.value)}
          />
        </div>
        <div>
          <label>Security Question 2:</label>
          <input
            type="text"
            value={securityQuestionTwo}
            onChange={(e) => setSecurityQuestionTwo(e.target.value)}
          />
        </div>
        <div>
          <label>Security Question 3:</label>
          <input
            type="text"
            value={securityQuestionThree}
            onChange={(e) => setSecurityQuestionThree(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message if there is an error */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterModal;
