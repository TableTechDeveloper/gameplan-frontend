import React, { useContext } from "react";
import axios from "axios";
import { ModalContext } from "../pages/_TemplatePage";
import SuccessModal from "../modals/SuccessModal";
import FailModal from "../modals/FailModal";
import "../styles/Card.css";

const GameSearchCard = ({ game }) => {
  const { openModal } = useContext(ModalContext);

  const handleAddGame = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve the token from local storage
      if (!token) {
        openModal(<FailModal message="You are not authenticated!" />);
        return;
      }

      const response = await axios.post(
        `/games/add`,
        { gameId: game.boardgamegeekref },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        openModal(<SuccessModal message="Game added to your collection!" />);
      }
    } catch (error) {
      console.error("Error adding game:", error);
      openModal(<FailModal message="Failed to add the game." />);
    }
  };

  return (
    <div className="card">
      <div>
        <h3>{game.name}</h3>
        <h4>Min-Players: {game.minplayers}</h4>
        <h4>Max-Players: {game.maxplayers}</h4>
        <h4>Playtime: {game.playtime} minutes</h4>
        <button className="button-primary" onClick={handleAddGame}>
          Add Game
        </button>
      </div>
      <div className="game-image">
        <img src={game.thumbnail || game.image} alt={game.name} />
      </div>
    </div>
  );
};

export default GameSearchCard;
