import React, { useContext } from "react";
import { ModalContext } from "../pages/_TemplatePage";
import { handleAddGame } from "../utils/gameActions";
import "../styles/Card.css";

const GameSearchCard = ({ game }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="card" id="game-search-card">
      <div className="card-info" id="game-search-info">
        <h3>{game.name}</h3>
        <p>Min-Players: {game.minplayers}</p>
        <p>Max-Players: {game.maxplayers}</p>
        <p>Playtime: {game.playtime} minutes</p>
      </div>
      <div
        className="card-image"
        id="game-search-image"
        style={{ backgroundImage: `url("${game.image || game.thumbnail}")` }}
      ></div>
      <div id="game-search-add-button-div">
        <button
          className="button-primary"
          id="game-search-add-button"
          onClick={() => handleAddGame(game.boardgamegeekref, openModal)}
        >
          Add Game
        </button>
      </div>
    </div>
  );
};

export default GameSearchCard;
