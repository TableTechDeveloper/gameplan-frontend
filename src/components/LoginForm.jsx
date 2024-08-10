// DEPRICATED: This file is no longer in use. It has been joined with LoginModal.jsx
// import React, { useState } from "react";
// import axios from "../axios"; // axios instance is imported from axios.js
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`/user/login`, {
//         username,
//         password,
//       });
//       console.log("Login successful:", response.data);
//       // Handle successful login (e.g., store token, redirect user)
//       const data = await response.data;
//       const token = data.jwt;

//       // Store the token in localStorage
//       localStorage.setItem("token", token);
//       console.log(
//         "Token stored in localStorage:",
//         localStorage.getItem("token")
//       );

//       // Clear form and error on success
//       setUsername("");
//       setPassword("");
//       setError(null);

//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error logging in:", error);
//       // Handle login error
//       if (error.response && error.response.data && error) {
//         setError(error.response.data.message);
//       } else {
//         setError("An error occurred while logging in. Please try again.");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
