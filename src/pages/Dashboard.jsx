import EventPreviewCard from "../components/EventPreviewCard"

const Dashboard = () => (
    
    <section className = "dashboard">
        
        <div>
            <h2>Welcome Username</h2>
            <p>Your upcoming games:</p>
        </div>
        <div className="upcoming-games">
            <EventPreviewCard />
            <EventPreviewCard />
            <EventPreviewCard />
        </div>

    </section>
);

export default Dashboard;