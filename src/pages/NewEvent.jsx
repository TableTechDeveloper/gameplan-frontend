import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchGames from '../functions/useFetchGames';
import useGameDetails from '../functions/useGameDetails'; // Custom hook
import { handleSubmitEvent } from '../functions/eventActions'; // Event submission handler
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewEvent = () => {
    const { games, loading, error } = useFetchGames();
    const [selectedGame, setSelectedGame] = useState('');
    const [eventDate, setEventDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [minParticipants, setMinParticipants] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');
    const navigate = useNavigate();

    const { gameDetails, setGameDetails, gameId } = useGameDetails(games, selectedGame); // Destructure setGameDetails here

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = {
            title,
            game: gameId,
            duration: gameDetails.duration,
            minParticipants: minParticipants || gameDetails.minPlayers,
            maxParticipants: maxParticipants || gameDetails.maxPlayers,
            eventDate,
            location,
            isPublic,
            isPublished: true,
            gameImage: gameDetails.image,
            gameThumbnail: gameDetails.thumbnail,
        };

        handleSubmitEvent(eventData, navigate);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="NewEvent">
            <h1>New Event</h1>
            <form id="new-event" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Event Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="games">Select a game:</label>
                    <input
                        type="text"
                        list="games"
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                        placeholder="Search for a game"
                    />
                    <datalist id="games">
                        {games.map(game => (
                            <option key={game._id} value={game.name}>
                                {game.name}
                            </option>
                        ))}
                    </datalist>
                </div>
                <div className="form-field">
                    <label htmlFor="gameDuration">Game Duration:</label>
                    <input
                        type="number"
                        id="game-duration"
                        name="gameduration"
                        value={gameDetails.duration}
                        onChange={(e) => setGameDetails({ ...gameDetails, duration: e.target.value })}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="minParticipants">Min Participants:</label>
                    <input
                        type="number"
                        id="min-participants"
                        name="minparticipants"
                        value={minParticipants || gameDetails.minPlayers}
                        onChange={(e) => setMinParticipants(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="maxParticipants">Max Participants:</label>
                    <input
                        type="number"
                        id="max-participants"
                        name="maxparticipants"
                        value={maxParticipants || gameDetails.maxPlayers}
                        onChange={(e) => setMaxParticipants(e.target.value)}
                        required
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
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Visibility:</label>
                    <div className="radio-buttons">
                        <div>
                            <input
                                className="radio-button"
                                type="radio"
                                id="game-public"
                                name="visibility"
                                value="public"
                                checked={isPublic}
                                onChange={() => setIsPublic(true)}
                            />
                            <label htmlFor="game-public">Public</label>
                        </div>
                        <div>
                            <input
                                className="radio-button"
                                type="radio"
                                id="game-private"
                                name="visibility"
                                value="private"
                                checked={!isPublic}
                                onChange={() => setIsPublic(false)}
                            />
                            <label htmlFor="game-private">Private</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="button-primary">Create Event</button>
            </form>
        </section>
    );
};

export default NewEvent;
