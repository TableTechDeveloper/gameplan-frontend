import UpcomingEventCard from "../components/UpcomingEventCard"

const MyEvents = () => (
    
    <section className = "MyEvents">
        <h2>My Events</h2>
        <button>New Event</button>
        <button className="unfilled-button">View Drafts</button>
        <h2>Upcoming games:</h2>
        <div>
            <UpcomingEventCard/>
            <UpcomingEventCard/>
            <UpcomingEventCard/>
        </div>

    </section>
);

export default MyEvents;