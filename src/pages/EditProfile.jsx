const EditProfile = () => (
  <section className="EditProfile">
    <h2>Profile Photo</h2>
    <div className="profile-photo"></div>

    <form id="edit-profile" action="/submit" method="post">
      <div className="form-field">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div className="form-field">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" required />
      </div>

      <div className="form-field">
        <label htmlFor="bio">Bio:</label>
        <input type="text" id="bio" name="bio" required />
      </div>
      <button type="submit" className="button-primary">
        Save Changes
      </button>
      <button type="reset" className="button-cancel">
        Discard Changes
      </button>
    </form>
  </section>
);

export default EditProfile;
