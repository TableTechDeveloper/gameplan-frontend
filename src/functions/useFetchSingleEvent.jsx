import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

const useFetchSingleEvent = (eventId) => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvent = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            setEvent(response.data.result);  // Assuming 'result' holds the event data
        } catch (err) {
            setError('Failed to load event data. ' + (err.response?.data?.message || err.message));
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [eventId]);

    useEffect(() => {
        fetchEvent();
    }, [fetchEvent]);

    return { event, loading, error, fetchEvent };
};

export default useFetchSingleEvent;
