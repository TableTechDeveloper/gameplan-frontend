import React, { useEffect, useState, useContext } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../pages/_TemplatePage";
import ResetPasswordModal from "../modals/ResetPasswordModal";
import ConfirmModal from "../modals/ConfirmModal";
import SuccessModal from "../modals/SuccessModal";
import FailModal from "../modals/FailModal";
import UserIcon from "../components/UserIcon";

const EditProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { openModal, closeModal } = useContext(ModalContext);

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
        setError(error.response?.data?.message || "An error occurred.");
      } finally {
        setIsLoading(false);
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

      openModal(<SuccessModal message="Profile updated successfully!" />);
      setTimeout(() => {
        closeModal();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      console.error("Error updating profile:", error);
      openModal(
        <FailModal
          message={error.response?.data?.message || "An error occurred."}
        />
      );
    }
  };

  const handleDiscardChanges = (event) => {
    event.target.reset();
    console.log("Changes discarded.");
  };

  const handleDeleteProfile = async () => {
    openModal(
      <ConfirmModal
        message="Are you sure you want to delete your profile permanently? This action cannot be undone."
        onConfirm={async () => {
          try {
            const token = localStorage.getItem("token");
            await axios.delete("/user", {
              headers: { Authorization: `Bearer ${token}` },
            });

            localStorage.removeItem("token");
            setUserData(null);
            navigate("/");

            closeModal();
            openModal(<SuccessModal message="Profile deleted successfully!" />);
            setTimeout(() => {
              closeModal();
            }, 2000);
          } catch (error) {
            console.error("Error deleting profile:", error);
            closeModal();
            openModal(
              <FailModal
                message={error.response?.data?.message || "An error occurred."}
              />
            );
          }
        }}
        onCancel={closeModal}
      />
    );
  };

  return (
    <section className="EditProfile">
      <h1>Edit Profile:</h1>
      <UserIcon />

      {error && <div className="error-message">{error}</div>}
      {isLoading ? (
        <p>Loading user data...</p>
      ) : (
        userData && (
          <div>
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

            <button onClick={handleDeleteProfile} className="button-delete">
              Delete Profile
            </button>
          </div>
        )
      )}
    </section>
  );
};

export default EditProfile;
