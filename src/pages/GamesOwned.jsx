import React from 'react';
import { NavLink } from 'react-router-dom';
import GameOwnedCard from '../components/GameOwnedCard';

import useFetchGames from '../functions/useFetchGames';
import UserIcon from '../components/UserIcon';

const GamesOwned = () => {

    const { games, loading, error, removeGame } = useFetchGames();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="page-section">
            <div className="page-top">
                <div>
                    <h1>My Games:</h1>
                    <UserIcon />
                </div>
                <NavLink to="/discovergames">
                    <button className="button-primary">Discover Games</button>
                </NavLink>
            </div>
            <div className="page-content">
                <h2>Your owned games:</h2>
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
