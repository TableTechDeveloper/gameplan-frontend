import DraftEventCard from "../components/DraftEventCard"

const MyDrafts = () => (
    
    <section className = "draft-events">
        <h2>My Drafts:</h2>

        <div>
            <DraftEventCard/>
            <DraftEventCard/>
            <DraftEventCard/>
        </div>

    </section>
);

export default MyDrafts;