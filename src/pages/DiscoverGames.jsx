import React, { useState } from "react";
import GameSearchCard from "../components/GameSearchCard";
import { NavLink } from "react-router-dom";
import fetchGameSearch from "../functions/fetchGameSearch";

const DiscoverGames = () => {
  const [query, setQuery] = useState("");
  const [gameData, setGameData] = useState(null);
  const [error, setError] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

  // Fetch the JWT token from localStorage
  const token = localStorage.getItem("authToken");

  const handleSearch = (event) => {
    event.preventDefault();
    fetchGameSearch(query, API_BASE_URL, token, setGameData, setError);
  };

  return (
    <section className="page-section" id="discover-games">
      <div className="game-search">
        <form onSubmit={handleSearch}>
          <label htmlFor="search">
            <h1>Find a game:</h1>
          </label>
          <input
            type="search"
            id="search"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query"
          />
          <button className="button-primary" type="submit">
            Search
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        <NavLink to="/gamesowned">
          <button className="button-secondary">My Games</button>
        </NavLink>
      </div>
      <div className="game-results">
        <h1>Results:</h1>
        <div className="game-search-results">
          {gameData ? (
            <GameSearchCard game={gameData} />
          ) : (
            <p>No games found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiscoverGames;
