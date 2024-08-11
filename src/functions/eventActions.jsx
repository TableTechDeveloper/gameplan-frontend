// eventActions.js
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

/**
 * Submits a new event to the server and navigates to the newly created event's page.
 * 
 * @param {Object} eventData - The data for the event being created.
 * @param {Function} navigate - The navigation function to redirect the user after the event is created.
 */
export const handleSubmitEvent = async (eventData, navigate) => {
    try {
        // Retrieve the authentication token.
        const token = getToken();
        
        // Send a POST request to the API to create a new event with the provided event data.
        const response = await axios.post(`${API_BASE_URL}/events/new`, eventData, {
            headers: {
                Authorization: `Bearer ${token}`, // Attach the token in the request headers for authorization.
            },
        });

        // Extract the ID of the newly created event from the response data.
        const newEventId = response.data.newEvent._id;
        
        // Redirect the user to the newly created event's page.
        navigate(`/events/${newEventId}`);
    } catch (error) {
        // Handle errors that may occur during the request.

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx (e.g., 400, 404, 500).
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received.
            console.error('Error request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an error.
            console.error('Error message:', error.message);
        }
    }
};
