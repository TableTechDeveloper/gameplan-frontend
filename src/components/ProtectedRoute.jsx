import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // If not logged in, redirect to homepage page
  // Impliment login popup modal here later
  if (token) {
    console.log("User is authenticated. Access granted to protected route.");
    return <Outlet />;
  } else {
    console.log(
      "User is not authenticated. Redirecting to homepage with login modal."
    );
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
