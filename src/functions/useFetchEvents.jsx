import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

const useFetchEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = getToken();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user/events?hosted=true`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEvents(response.data.events);
            } catch (err) {
                setError("Failed to load events.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [token]);

    return { events, loading, error };
};

export default useFetchEvents;
