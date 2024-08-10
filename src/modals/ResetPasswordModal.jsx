import React, { useState, useContext } from "react";
import axios from "../axios";
import { ModalContext } from "../pages/_TemplatePage";

const ResetPasswordModal = () => {
  const [email, setEmail] = useState("");
  const [securityQuestionOne, setSecurityQuestionOne] = useState("");
  const [securityQuestionTwo, setSecurityQuestionTwo] = useState("");
  const [securityQuestionThree, setSecurityQuestionThree] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const { closeModal } = useContext(ModalContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("/user/password-reset", {
        email,
        securityQuestionOne,
        securityQuestionTwo,
        securityQuestionThree,
        password: newPassword,
      });

      // Clear form fields
      setEmail("");
      setSecurityQuestionOne("");
      setSecurityQuestionTwo("");
      setSecurityQuestionThree("");
      setNewPassword("");
      setConfirmPassword("");
      setError(null);

      closeModal();
      // Potentially display a success message or redirect to the login page
    } catch (error) {
      console.error("Error resetting password:", error);
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div>
      <h2>Reset your password:</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="securityQuestionOne">Security Question 1:</label>
          <input
            type="text"
            id="securityQuestionOne"
            name="securityQuestionOne"
            value={securityQuestionOne}
            onChange={(e) => setSecurityQuestionOne(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="securityQuestionTwo">Security Question 1:</label>
          <input
            type="text"
            id="securityQuestionTwo"
            name="securityQuestionTwo"
            value={securityQuestionTwo}
            onChange={(e) => setSecurityQuestionTwo(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="securityQuestionThree">Security Question 3:</label>
          <input
            type="text"
            id="securityQuestionThree"
            name="securityQuestionThree"
            value={securityQuestionThree}
            onChange={(e) => setSecurityQuestionThree(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className="button-primary" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordModal;
