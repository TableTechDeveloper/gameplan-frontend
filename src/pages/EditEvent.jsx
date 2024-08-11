import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useFetchGames from "../functions/useFetchGames";
import useFetchSingleEvent from "../functions/useFetchSingleEvent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { API_BASE_URL, getToken } from "../config";
import { ModalContext } from "../pages/_TemplatePage";
import SuccessModal from "../modals/SuccessModal";
import FailModal from "../modals/FailModal";

const EditEvent = () => {
  const { id } = useParams();
  const { games, loading: gamesLoading, error: gamesError } = useFetchGames();
  const {
    event,
    loading: eventLoading,
    error: eventError,
  } = useFetchSingleEvent(id);
  const [selectedGame, setSelectedGame] = useState("");
  const [gameDetails, setGameDetails] = useState({
    duration: "",
    minPlayers: "",
    maxPlayers: "",
    image: "",
    thumbnail: "",
  });
  const [eventDate, setEventDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [minParticipants, setMinParticipants] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [gameId, setGameId] = useState("");
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (event) {
      console.log("Event data:", event); // Debugging
      setTitle(event.title);
      setSelectedGame(event.game.name); // Set the game name
      setEventDate(new Date(event.eventDate));
      setLocation(event.location);
      setIsPublic(event.isPublic);
      setMinParticipants(event.minParticipants);
      setMaxParticipants(event.maxParticipants);
      setGameDetails({
        duration: event.gamelength,
        minPlayers: event.minParticipants,
        maxPlayers: event.maxParticipants,
        image: event.gameImage,
        thumbnail: event.gameThumbnail,
      });
      setGameId(event.game._id);
    }
  }, [event]);

  const handleGameChange = (e) => {
    const gameName = e.target.value;
    setSelectedGame(gameName);
    const game = games.find((g) => g.name === gameName);
    if (game) {
      setGameId(game._id);
      setGameDetails({
        duration: game.playtime,
        minPlayers: game.minplayers,
        maxPlayers: game.maxplayers,
        image: game.image,
        thumbnail: game.thumbnail,
      });
    } else {
      setGameId("");
      setGameDetails({
        duration: "",
        minPlayers: "",
        maxPlayers: "",
        image: "",
        thumbnail: "",
      });
    }
  };

  // I know having this function here is not very dry. But every time I tried to split this off I broke everything.
  // So here we are.
  const handleSubmitEditEvent = async (e) => {
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

    try {
      const token = getToken();
      const response = await axios.patch(
        `${API_BASE_URL}/events/${id}`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      openModal(
        <SuccessModal
          message={`Event ${response.data.event.title} updated successfully!`}
        />
      );
      navigate(`/events/${id}`);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        openModal(
          <FailModal
            message={`Failed to update the event: ${error.response.data.message}`}
          />
        );
      } else if (error.request) {
        console.error("Error request:", error.request);
        openModal(
          <FailModal message="Failed to update the event. Please try again later." />
        );
      } else {
        console.error("Error message:", error.message);
        openModal(
          <FailModal message={`Failed to update the event: ${error.message}`} />
        );
      }
    }
  };

  if (gamesLoading || eventLoading) return <p>Loading...</p>;
  if (gamesError || eventError) return <p>{gamesError || eventError}</p>;

  return (
    <section className="NewEvent">
      <h1>Edit Event</h1>
      <form id="new-event" onSubmit={handleSubmitEditEvent}>
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
            onChange={handleGameChange}
            placeholder="Search for a game"
          />
          <datalist id="games">
            {games.map((game) => (
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
            onChange={(e) =>
              setGameDetails({ ...gameDetails, duration: e.target.value })
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="minParticipants">Min Participants:</label>
          <input
            type="number"
            id="min-participants"
            name="minparticipants"
            value={minParticipants}
            onChange={(e) => setMinParticipants(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="maxParticipants">Max Participants:</label>
          <input
            type="number"
            id="max-participants"
            name="maxparticipants"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="eventDate">Event Date and Time:</label>
          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
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
          <label>
            Visibility: Private Events don't show up in discover events. Share
            and join them via a URL link!
          </label>
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
        <button type="submit" className="button-primary">
          Update Event
        </button>
      </form>
    </section>
  );
};

export default EditEvent;
