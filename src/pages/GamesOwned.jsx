import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import GameOwnedCard from "../components/GameOwnedCard";

const GamesOwned = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    // Fetch games from the backend
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/collection/${gameId}/user/collection`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setGames(response.data.games);
      } catch (err) {
        setError("Failed to load games.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [token]);

  const handleRemoveGameFromList = (gameId) => {
    setGames((prevGames) => prevGames.filter((game) => game._id !== gameId));
  };

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
          <GameOwnedCard
            key={game._id}
            gameId={game._id}
            name={game.name}
            minPlayers={game.minplayers}
            maxPlayers={game.maxplayers}
            playtime={game.playtime}
            image={game.image}
            onRemoveGame={handleRemoveGameFromList}
          />
        ))}
      </div>
    </section>
  );
};

export default GamesOwned;
