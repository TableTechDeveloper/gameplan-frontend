import { NavLink } from 'react-router-dom';
import UpcomingEventCard from "../components/UpcomingEventCard"

const MyEvents = () => (
    
    <section className = "MyEvents">
        <h2>My Events</h2>
        <div>
            <NavLink to="/newevent">
                <button className="button-primary">New Event</button>
            </NavLink>
            <NavLink to="/mydrafts">
                <button className="button-secondary">View Drafts</button>
            </NavLink>
        </div>
        <h2>Upcoming games:</h2>
        <div>
            <UpcomingEventCard/>
            <UpcomingEventCard/>
            <UpcomingEventCard/>
        </div>

    </section>
);

export default MyEvents;