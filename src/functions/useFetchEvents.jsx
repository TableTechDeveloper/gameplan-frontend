import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

/**
 * Custom hook to fetch events data from the server.
 * 
 * @param {boolean} hosted - A flag indicating whether to fetch events hosted by the user or all events.
 * @returns {Object} - An object containing the events data, loading state, and error state.
 */
const useFetchEvents = (hosted) => {
    // State to store the fetched events.
    const [events, setEvents] = useState([]);
    
    // State to track the loading status.
    const [loading, setLoading] = useState(true);
    
    // State to store any error that occurs during the fetch operation.
    const [error, setError] = useState(null);
    
    // Retrieve the authentication token.
    const token = getToken();

    useEffect(() => {
        // Function to fetch events data from the API.
        const fetchEvents = async () => {
            try {
                // Send a GET request to the API to fetch events based on the 'hosted' flag.
                const response = await axios.get(`${API_BASE_URL}/user/events?hosted=${hosted}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach the token in the request headers for authorization.
                    },
                });

                // Sort the events by date before updating the state.
                const sortedEvents = response.data.events.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
                
                // Update the events state with the sorted events.
                setEvents(sortedEvents);
            } catch (err) {
                // Handle any errors that occur during the fetch.
                setError('Failed to load events.'); // Update the error state with a user-friendly message.
                console.error(err); // Log the error to the console for debugging.
            } finally {
                // Set loading to false regardless of success or failure.
                setLoading(false);
            }
        };

        // Trigger the fetchEvents function to start fetching data.
        fetchEvents();
    }, [token, hosted]); // Dependency array: re-run the effect if the token or hosted flag changes.

    // Return the events data, loading status, and error state.
    return { events, loading, error };
};

export default useFetchEvents;
