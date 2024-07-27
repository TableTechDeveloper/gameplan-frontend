const EventPage = () => (
    
    <section className = "EventPage">
        <h2>Event Name</h2>
        <div className="host-details">
            {/* profile image */}
            <h4>Hosted By:</h4>
            {/* host name field */}
        </div>
        {/* game photos */}
        <h3>Date & Time:</h3>
        <h3>Location:</h3>
        <h3>Info:</h3>
        <h3>Guests Attending:</h3>
        <h5>Guest 1</h5>
        <h5>Guest 2</h5>
        <h3>Free Spots:</h3>
        <div className="edit-link">Edit Event</div>
        <div className="cancel-link">Cancel Event</div>

    </section>
);

export default EventPage;