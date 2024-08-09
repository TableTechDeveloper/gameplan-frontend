// useGameDetails.js
import { useState, useEffect } from 'react';

const useGameDetails = (games, selectedGame) => {
    const [gameDetails, setGameDetails] = useState({
        duration: '',
        minPlayers: '',
        maxPlayers: '',
        image: '',
        thumbnail: ''
    });
    const [gameId, setGameId] = useState('');

    useEffect(() => {
        const game = games.find(g => g.name === selectedGame);
        if (game) {
            setGameId(game._id); // Store game ID
            setGameDetails({
                duration: game.playtime,
                minPlayers: game.minplayers,
                maxPlayers: game.maxplayers,
                image: game.image,
                thumbnail: game.thumbnail
            });
        } else {
            setGameId(''); // Clear game ID if no game is selected
            setGameDetails({ duration: '', minPlayers: '', maxPlayers: '', image: '', thumbnail: '' });
        }
    }, [selectedGame, games]);

    return { gameDetails, setGameDetails, gameId }; // Return setGameDetails here
};

export default useGameDetails;
