import React from "react";
import useFetchUser from "../functions/useFetchUser";

const UserIcon = () => {
  const { user, loading: userLoading, error: userError } = useFetchUser();

  if (userLoading) {
    return <h2>Loading...</h2>;
  }

  if (userError) {
    return <h2>Error: {userError}</h2>;
  }

  return (
    <div>
      <h2>Welcome {user ? user.username : "Guest"}</h2>
      {/* <p>User ID: {user.id}</p> */}
      {/* when fetching the user user.id not user._id for some reason */}
    </div>
  );
};

export default UserIcon;
