import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import GameCard from '../components/GameOwnedCard';

const GamesOwned = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch games from the backend
        const fetchGames = async () => {
            try {
                const response = await axios.get('/collection', {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`  // Replace with your actual token handling
                    }
                });
                setGames(response.data.games);
            } catch (err) {
                setError('Failed to load games.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="games-owned">
            <h2>My Games:</h2>
            <NavLink to="/discovergames">
                <button className="button-primary">Discover Games</button>
            </NavLink>
            <div>
                {games.map((game) => (
                    <GameCard 
                        key={game._id}  // Assuming each game has a unique _id
                        name={game.name}
                        minPlayers={game.minPlayers}
                        maxPlayers={game.maxPlayers}
                        playtime={game.playtime}
                        image={game.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default GamesOwned;
