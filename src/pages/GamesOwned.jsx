import { NavLink } from 'react-router-dom';
import GameCard from "../components/GameOwnedCard";

const GamesOwned = () => (
    
    <section className = "games-owned">
        <h2>My Games:</h2>
        <NavLink to="/discovergames">
            <button className="button-primary">Discover Games</button>
        </NavLink>
        <div>
            <GameCard />
            <GameCard />
            <GameCard />
        </div>

    </section>
);

export default GamesOwned;