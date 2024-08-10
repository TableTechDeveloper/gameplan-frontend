import React, { useEffect, useState, useContext } from "react";
import axios from "../axios";
import { ModalContext } from "../pages/_TemplatePage";
import ResetPasswordModal from "../modals/ResetPasswordModal";

const EditProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Handle case where user is not logged in (redirect to login page)
          return;
        }

        const response = await axios.get(`/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        console.log("Fetched user data:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error (display error message)
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred while fetching user data.");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChangePasswordClick = () => {
    openModal(<ResetPasswordModal />);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedUserData = {
      username: event.target.username.value,
      location: event.target.location.value,
      bio: event.target.bio.value,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.patch(`/user/update`, updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(updatedUserData);
      console.log(
        "Changes patched successfully! Updated user data:",
        updatedUserData
      );
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle error (display error message)
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while updating user data.");
      }
    }
  };

  const handleDiscardChanges = (event) => {
    event.target.reset();
    console.log("Changes discarded.");
  };

  return (
    <section className="EditProfile">
      <h2>Profile Photo</h2>
      <div className="profile-photo"></div>

      {error && <div className="error-message">{error}</div>}
      {userData && (
        <form
          id="edit-profile"
          onSubmit={handleSubmit}
          onReset={handleDiscardChanges}
          method="post"
        >
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={userData?.username}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={userData?.location}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="bio">Bio:</label>
            <input
              type="text"
              id="bio"
              name="bio"
              defaultValue={userData?.bio}
            />
          </div>

          <p className="small-link" onClick={handleChangePasswordClick}>
            Change Password
          </p>

          <button type="submit" className="button-primary">
            Save Changes
          </button>
          <button type="reset" className="button-cancel">
            Discard Changes
          </button>
        </form>
      )}
    </section>
  );
};

export default EditProfile;
