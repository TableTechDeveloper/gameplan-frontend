const NewEvent = () => (
    
    <section className = "NewEvent">
        <h2>New Event:</h2>

        <form id="new-event" action="/submit" method="post">

            <div className="form-field">
                <label for="game-name">Game Name:</label>
                <input type="text" id="game-name" name="game-name" required />
            </div>

            <div className="form-field">
                <label for="game-date">Date:</label>
                <input type="text" id="game-date" name="game-date" required />
            </div>

            <div className="form-field">
                <label for="game-time">Time:</label>
                <input type="text" id="game-time" name="game-time" required />
            </div>

            <div className="form-field">
                <label for="game-location">Location:</label>
                <input type="text" id="game-location" name="game-location" required />
            </div>

            <div className="form-field">
                <label for="game-duration">Duration:</label>
                <input type="text" id="game-duration" name="game-duration" required />
            </div>

            <div className="form-field">
                <label for="game-description">Description / comments:</label>
                <input type="text" id="game-description" name="game-description" required />
            </div>

            <div className="form-field">
                <label for="min-players">Min Players:</label>
                <input type="text" id="min-players" name="min-players" required />
            </div>

            <div className="form-field">
                <label for="max-players">Max Players:</label>
                <input type="text" id="max-players" name="max-players" required />
            </div>

            <div className="toggle-button">
                <span className="toggle-circle"></span>
            </div>

            <button type="submit" className="button-primary">Save Changes</button>
            <button type="submit" className="button-secondary">Preview Event</button>
            <button type="submit" className="button-secondary">Save As Draft</button>
            <button type="reset" className="button-cancel">Discard Changes</button>

        
        
        </form>

    </section>
);

export default NewEvent;