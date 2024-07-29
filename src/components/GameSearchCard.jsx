import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import "../styles/Card.css"

const GameSearchCard = ({ game }) => {
    const { openModal } = useContext(ModalContext);

    const handleAddGame = () => {
        openModal(<SuccessModal message="Game added to your collection!" />);
    };

    return (
        <div className='card'>
            <div>
                <h3>{game.name}</h3>
                <h4>Min-Players: {game.minplayers}</h4>
                <h4>Max-Players: {game.maxplayers}</h4>
                <h4>Playtime: {game.playtime} minutes</h4>
                <button className="button-primary" onClick={handleAddGame}>Add Game</button>
            </div>
            <div className="game-image">
                <img src={game.thumbnail || game.image} alt={game.name} />
            </div>
        </div>
    );
};

export default GameSearchCard;
