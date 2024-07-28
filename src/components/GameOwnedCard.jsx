// GameOwnedCard.jsx
import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import "../styles/Card.css"
import ConfirmModal from '../modals/ConfirmModal';

const GameOwnedCard = () => {
    const { openModal } = useContext(ModalContext);

    const handleRemoveGame = () => {
        openModal(<ConfirmModal message="remove this game from your collection" />);
    };

    return (
        <div className="card">
            <div>
                <h3>Game Name</h3>
                <h4>Min-Players</h4>
                <h4>Max-Players</h4>
                <h4>Playtime</h4>
                <button className="button-cancel" onClick={handleRemoveGame}>Remove Game</button>
            </div>
            <div className='game-image'>image</div>
        </div>
    );
};

export default GameOwnedCard;
