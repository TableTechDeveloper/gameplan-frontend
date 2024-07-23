import GameCard from "../components/GameOwnedCard";

const GamesOwned = () => (
    
    <section className = "games-owned">
        <h2>My Games:</h2>
        <button>Discover Games</button>
        <div>
            <GameCard />
            <GameCard />
            <GameCard />
        </div>

    </section>
);

export default GamesOwned;