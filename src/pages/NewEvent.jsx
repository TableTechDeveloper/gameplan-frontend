import React, { useState, useEffect } from 'react';
import useFetchGames from '../functions/useFetchGames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewEvent = () => {
    const { games, loading, error } = useFetchGames();
    const [selectedGame, setSelectedGame] = useState('');
    const [gameDetails, setGameDetails] = useState({ duration: '', minPlayers: '', maxPlayers: '' });
    const [eventDate, setEventDate] = useState(new Date());

    useEffect(() => {
        const game = games.find(g => g.name === selectedGame);
        if (game) {
            setGameDetails({
                duration: game.playtime,
                minPlayers: game.minplayers,
                maxPlayers: game.maxplayers
            });
        } else {
            setGameDetails({ duration: '', minPlayers: '', maxPlayers: '' });
        }
    }, [selectedGame, games]);

    const handleGameChange = (e) => {
        setSelectedGame(e.target.value);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="NewEvent">
            <h1>New Event</h1>
            <form id="new-event">
                <h2>Select a game:</h2>
                <input
                    type="text"
                    list="games"
                    value={selectedGame}
                    onChange={handleGameChange}
                    placeholder="Search for a game"
                />
                <datalist id="games">
                    {games.map(game => (
                        <option key={game._id} value={game.name}>
                            {game.name}
                        </option>
                    ))}
                </datalist>
                {/* these fields below should autofill from selected game data */}
                <div className="form-field">
                    <label htmlFor="gameDuration">Game Duration:</label>
                    <input
                        type="text"
                        id="game-duration"
                        name="gameduration"
                        value={gameDetails.duration}
                        readOnly
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="minPlayers">Min Players:</label>
                    <input
                        type="text"
                        id="min-players"
                        name="minplayers"
                        value={gameDetails.minPlayers}
                        readOnly
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="maxPlayers">Max Players:</label>
                    <input
                        type="text"
                        id="max-players"
                        name="maxplayers"
                        value={gameDetails.maxPlayers}
                        readOnly
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="eventDate">Event Date and Time:</label>
                    <DatePicker
                        selected={eventDate}
                        onChange={date => setEventDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="game-location"
                        name="location"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="game-description"
                        name="description"
                    />
                </div>
                {/* public / private radio button */}
                <div className="private-radio">
                    <label>Visibility:</label>
                    <div className="form-field">
                        <input
                            type="radio"
                            id="game-private"
                            name="visibility"
                            value="private"
                        />
                        <label htmlFor="game-private">Private</label>
                    </div>
                    <div className="form-field">
                        <input
                            type="radio"
                            id="game-public"
                            name="visibility"
                            value="public"
                        />
                        <label htmlFor="game-public">Public</label>
                    </div>
                </div>
                                
                <button type="submit" className="button-primary">Create Event</button>
            </form>
        </section>
    );
};

export default NewEvent;
