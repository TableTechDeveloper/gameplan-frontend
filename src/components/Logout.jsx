const Logout = () => {
  // Remove privilages of logged in user
  localStorage.removeItem("token");
  console.log(
    "Token removed from localStorage:",
    localStorage.getItem("token")
  );
};

export default Logout;
