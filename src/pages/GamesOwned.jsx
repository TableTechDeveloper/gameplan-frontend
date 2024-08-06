import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GameOwnedCard from '../components/GameOwnedCard';
import { UserContext } from '../context/UserContext';
import useFetchGames from '../functions/useFetchGames';

const GamesOwned = () => {
    const { user, loading: userLoading } = useContext(UserContext);
    const { games, loading, error, removeGame } = useFetchGames();

    if (loading || userLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="games-owned">
            <h2>My Games:</h2>
            <p>Welcome, {user ? user.username : 'Guest'}!</p>
            <NavLink to="/discovergames">
                <button className="button-primary">Discover Games</button>
            </NavLink>
            <div>
                {games.map((game) => (
                    <GameOwnedCard 
                        key={game._id}
                        gameId={game._id}
                        name={game.name}
                        minPlayers={game.minplayers}
                        maxPlayers={game.maxplayers}
                        playtime={game.playtime}
                        image={game.image}
                        onRemoveGame={removeGame}
                    />
                ))}
            </div>
        </section>
    );
};

export default GamesOwned;
