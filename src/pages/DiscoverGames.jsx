import GameSearchCard from "../components/GameSearchCard";

const DiscoverGames = () => (
    
    <section className = "DiscoverGames">

        <form action="/search" method="get">
            <label for="search"><h2>Find a game:</h2></label>
            <input type="search" id="search" name="query" placeholder="Enter your search query"/>
            <button type="submit">Search</button>
        </form>

        <h2>Results:</h2>

        <div className="game-search-results">
            <GameSearchCard />
            <GameSearchCard />
            <GameSearchCard />
        </div>

        <button>Load more</button>


    </section>
);

export default DiscoverGames;