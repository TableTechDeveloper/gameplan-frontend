import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useFetchGames from '../functions/useFetchGames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { API_BASE_URL, getToken } from '../config';

const NewEvent = () => {
    const { games, loading, error } = useFetchGames();
    const [selectedGame, setSelectedGame] = useState('');
    const [gameDetails, setGameDetails] = useState({ duration: '', minPlayers: '', maxPlayers: '', image: '', thumbnail: '' });
    const [eventDate, setEventDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [minParticipants, setMinParticipants] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');
    const [gameId, setGameId] = useState(''); // State to store game ID
    const navigate = useNavigate();

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

    const handleGameChange = (e) => {
        setSelectedGame(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = {
            title,
            game: gameId, // Use game ID
            duration: gameDetails.duration,
            minParticipants: minParticipants || gameDetails.minPlayers,
            maxParticipants: maxParticipants || gameDetails.maxPlayers,
            eventDate,
            location,
            description,
            isPublic,
            isPublished: true,
            gameImage: gameDetails.image,
            gameThumbnail: gameDetails.thumbnail
        };

        try {
            const token = getToken();
            const response = await axios.post(`${API_BASE_URL}/events/new`, eventData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newEventId = response.data.newEvent._id; // Assuming the new event's ID is returned in response.data.newEvent._id
            navigate(`/events/${newEventId}`);
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
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
                    <label htmlFor="minParticipants">Min Participants:</label>
                    <input
                        type="text"
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
                        type="text"
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
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label>Visibility:</label>
                    <div>
                        <input
                            type="radio"
                            id="game-private"
                            name="visibility"
                            value="private"
                            checked={!isPublic}
                            onChange={() => setIsPublic(false)}
                        />
                        <label htmlFor="game-private">Private</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="game-public"
                            name="visibility"
                            value="public"
                            checked={isPublic}
                            onChange={() => setIsPublic(true)}
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
