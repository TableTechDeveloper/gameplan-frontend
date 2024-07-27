const EditProfile = () => (
    
    <section className = "EditProfile">
        <h2>Profile Photo</h2>
        <div className="profile-photo"></div>
        
        <form id="edit-profile" action="/submit" method="post">

            <div className="form-field">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>

            <div className="form-field">
                <label for="location">Location:</label>
                <input type="text" id="location" name="location" required />
            </div>

            <div className="form-field">
                <label for="bio">Bio:</label>
                <input type="text" id="bio" name="bio" required />
            </div>

            <div className="form-field">
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" required />
            </div>

            <div className="form-field">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
            </div>

            <button  type="submit" className="button-primary">Save Changes</button>
            <button type="reset" className="button-cancel">Discard Changes</button>
            


        </form>

    </section>
);

export default EditProfile;