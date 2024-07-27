// GameOwnedCard.jsx
import React from 'react';
import "../styles/Card.css"

const GameOwnedCard = () => {
    return (
        <div className='card'>
            <div>
                <h3>Game Name</h3>
                <h4>Min-Players</h4>
                <h4>Max-Players</h4>
                <h4>Playtime</h4>
                <button className="button-cancel">Remove Game</button>
            </div>
            <div className='game-image'>image</div>
        </div>
    );
};

export default GameOwnedCard;
