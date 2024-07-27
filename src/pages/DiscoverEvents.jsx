import EventPreviewCard from "../components/EventPreviewCard"

const DiscoverEvents = () => (
    
    <section className = "dashboard">
        
        <div>
            <h2>Upcoming Games:</h2>

        </div>
        <div className="upcoming-games">
            <EventPreviewCard />
            <EventPreviewCard />
            <EventPreviewCard />
        </div>

    </section>
);

export default DiscoverEvents;