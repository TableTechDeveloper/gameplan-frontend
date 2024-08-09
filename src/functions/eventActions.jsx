// eventActions.js
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

export const handleSubmitEvent = async (eventData, navigate) => {
    try {
        const token = getToken();
        const response = await axios.post(`${API_BASE_URL}/events/new`, eventData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const newEventId = response.data.newEvent._id;
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
