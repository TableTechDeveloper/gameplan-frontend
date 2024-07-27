import React from 'react';
import "../styles/Card.css"

const GameSearchCard = () => {
    return (
        
        <div className='card'>
            <div>
                <h3>Game Name</h3>
                <h4>Min-Players</h4>
                <h4>Max-Players</h4>
                <h4>Playtime</h4>
                <button className="button-primary">Add Game</button>
            </div>
            <div className='game-image'>image</div>
        </div>

    );
};

export default GameSearchCard;