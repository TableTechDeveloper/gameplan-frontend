import "../styles/EventPage.css"

const EventPage = () => (
    
    <section className = "EventPage">
        <div className="event-header">
            <div className="event-details">
                <h1>Event Name</h1>
                <div id="host-details">
                    <div id="profile-photo"></div>
                    <div id="host-name">
                        <h3>Hosted By:</h3>
                        <p>Host Name</p>
                    </div>
                </div>

            </div>
            <div className="traffic-light">traffic light</div>
        </div>

        <div className="game-image" id="eventpage-gameimage">Game Image</div>
        <h3>Date & Time:</h3>
        <h3>Location:</h3>
        <h3>Info:</h3>
        <h3>Guests Attending:</h3>
        <p>Guest 1</p>
        <p>Guest 2</p>
        <h3>Free Spots:</h3>
        <button className="button-primary">Join Event</button>
        <button className="button-cancel">Leave Event</button>
        <div className="edit-link">Edit Event</div>
        <div className="cancel-link">Cancel Event</div>

    </section>
);

export default EventPage;