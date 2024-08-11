import React, { useContext } from 'react';
import { ModalContext } from '../pages/_TemplatePage';
import "../styles/Card.css";
import { handleConfirmClick } from '../utils/gameActions';

const GameOwnedCard = ({ gameId, name, minPlayers, maxPlayers, playtime, image, onRemoveGame }) => {
    const { openModal, closeModal } = useContext(ModalContext);

    return (
        <div className="card">
            <div className="card-info">
                <h3>{name}</h3>
                <p>Min Players: {minPlayers}</p>
                <p>Max Players: {maxPlayers}</p>
                <p>Playtime: {playtime} minutes</p>
            </div>
            <div className="card-image" style={{ backgroundImage: `url("${image}")` }}></div>
            <div className="card-button">
                <button className="button-cancel" onClick={() => handleConfirmClick(name, gameId, onRemoveGame, openModal, closeModal)}>
                    Remove Game
                </button>
            </div>
        </div>
    );
};

export default GameOwnedCard;