import React, { useContext, useState } from "react";
import axios from "axios";
import { ModalContext } from "../pages/_TemplatePage";
import LoginModal from "./LoginModal";
import { API_BASE_URL } from '../config';

const RegisterModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    securityQuestionOne: "",
    securityQuestionTwo: "",
    securityQuestionThree: ""
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent event bubbling

    const {
      username,
      email,
      password,
      confirmPassword,
      location,
      securityQuestionOne,
      securityQuestionTwo,
      securityQuestionThree
    } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/register`,
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

      // Clear form data so it is clear to the user that registration is successfully submitted
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        securityQuestionOne: "",
        securityQuestionTwo: "",
        securityQuestionThree: ""
      });
      setError(null);

      closeModal();
      openModal(<LoginModal />);
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response && error.response.data && error.response.data.message) {
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
        <div className="form-field">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Security Question 1:</label>
          <input
            type="text"
            name="securityQuestionOne"
            value={formData.securityQuestionOne}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Security Question 2:</label>
          <input
            type="text"
            name="securityQuestionTwo"
            value={formData.securityQuestionTwo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Security Question 3:</label>
          <input
            type="text"
            name="securityQuestionThree"
            value={formData.securityQuestionThree}
            onChange={handleInputChange}
          />
        </div>
        {error && <div className="error-message">{error}</div>}{" "}
        <button className="button-primary" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterModal;
