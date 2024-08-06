/*
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ModalContext } from './_TemplatePage';
import ConfirmModal from "../modals/ConfirmModal";

const NewEvent = () => {
    const { id } = useParams(); // Get the event ID from the URL if it exists
    const navigate = useNavigate();
    const { openModal } = useContext(ModalContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [eventData, setEventData] = useState({

    });

    const token = localStorage.getItem('authToken'); // Ensure you're retrieving the token

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            axios.get(`${process.env.REACT_APP_SERVER_URL}/events/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setEventData(response.data.result);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Failed to load event data:', error.response ? error.response.data : error);
                setError('Failed to load event data');
                setIsLoading(false);
            });
        }
    }, [id, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const method = id ? 'patch' : 'post';
        const url = `${process.env.REACT_APP_SERVER_URL}/events/${id || ''}`;
        axios[method](url, eventData)
            .then(() => {
                navigate('/myevents'); // Redirect to events page or confirmation page
            })
            .catch(err => {
                console.error('Error submitting event:', err);
                openModal(<ConfirmModal message="Failed to save event" />);
            });
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleDeleteEvent = () => {
        openModal(<ConfirmModal message="delete this event" />);
    };

    return (
        <section className="NewEvent">
            <h2>{id ? 'Edit Event:' : 'New Event:'}</h2>

            <form id="new-event" onSubmit={handleSubmit}>
                
                <div className="form-field">
                    <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="event-name" name="title" value={eventData.title || ''} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="eventDate">Date:</label>
                    <input type="text" id="event-date" name="eventDate" value={eventData.eventDate || ''} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="eventLocation">Location:</label>
                    <input type="text" id="event-location" name="location" value={eventData.location || ''} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="gameDuration">Duration:</label>
                    <input type="text" id="event-duration" name="gamelength" value={eventData.gamelength || ''} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="minPlayers">Min Players:</label>
                    <input type="text" id="min-players" name="minParticipants" value={eventData.minParticipants || ''} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="maxPlayers">Max Players:</label>
                    <input type="text" id="max-players" name="maxParticipants" value={eventData.maxParticipants || ''} onChange={handleChange} required />
                </div>
                
                <button type="submit" className="button-primary">Save Changes</button>
            </form>
            {id && <button className="button-cancel" onClick={handleDeleteEvent}>Delete Event</button>}
        </section>
    );
};

export default NewEvent;

*/
