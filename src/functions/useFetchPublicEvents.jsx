import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';



/**
 * Custom hook to fetch public events data from the server.
 * 
 * @returns {Object} - An object containing the events data, loading state, and error state.
 */
const useFetchPublicEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublicEvents = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/events`);
                setEvents(response.data.foundEvents);
            } catch (err) {
                setError("Failed to load events.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPublicEvents();
    }, []);

    return { events, loading, error };
};

export default useFetchPublicEvents;
