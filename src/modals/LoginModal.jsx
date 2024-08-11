import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ModalContext } from "../pages/_TemplatePage";
import RegisterModal from "../modals/RegisterModal";
import ResetPasswordModal from "./ResetPasswordModal";
import { API_BASE_URL } from '../config';

const LoginModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, {
        username,
        password,
      });
      console.log("Login successful:", response.data);

      const data = response.data;
      const token = data.jwt;

      localStorage.setItem("token", token);
      console.log(
        "Token stored in localStorage:",
        localStorage.getItem("token")
      );

      // Clear form and error on success
      setUsername("");
      setPassword("");
      setError(null);

      closeModal();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
      if (error.response && error.response.data && error) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while logging in. Please try again.");
      }
    }
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<RegisterModal />);
  };

  const handleForgotPasswordClick = (event) => {
    event.preventDefault();
    closeModal();
    openModal(<ResetPasswordModal />);
  };

  return (
    <div>
      <p>
        Not a member yet?{" "}
        <span className="small-link" onClick={handleRegisterClick}>
          Sign Up!
        </span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="button-primary" type="submit">Login</button>
      </form>

      <p className="small-link" onClick={handleForgotPasswordClick}>
        Forgot Password?
      </p>
    </div>
  );
};

export default LoginModal;
