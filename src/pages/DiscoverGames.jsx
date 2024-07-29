import React, { useState } from 'react';
import axios from 'axios';
import GameSearchCard from "../components/GameSearchCard";

const DiscoverGames = () => {
    const [query, setQuery] = useState('');
    const [gameData, setGameData] = useState(null);
    const [error, setError] = useState(null);

    // Replace 'YourJWTTokenHere' with the actual token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTZiZmJmYjRmNzIwMGJmMjNmZGVjZCIsImlhdCI6MTcyMjI4MTM3MywiZXhwIjoxNzIyODg2MTczfQ.34lOQIKGwvhn31E7nA4iguzpZ56aXpQSxaxcqMsdcz8';

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/games/search?query=${query}&strict=true`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setGameData(response.data.games); // Should be a single object in strict mode
            setError(null);
        } catch (error) {
            console.error("Error fetching game data:", error);
            setError(error.response?.data?.message || "An error occurred while searching for the game");
        }
    };

    return (
        <section className="DiscoverGames">
            <form onSubmit={handleSearch}>
                <label htmlFor="search"><h2>Find a game:</h2></label>
                <input
                    type="search"
                    id="search"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your search query"
                />
                <button className="button-primary" type="submit">Search</button>
            </form>
            {error && <div className="error">{error}</div>}
            <h2>Results:</h2>
            <div className="game-search-results">
                {gameData ? (
                    <GameSearchCard game={gameData} />
                ) : (
                    <p>No games found</p>
                )}
            </div>
        </section>
    );
};

export default DiscoverGames;
