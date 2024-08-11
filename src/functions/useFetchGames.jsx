import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

/**
 * Custom hook to fetch games data from the server and manage the game collection.
 * 
 * @returns {Object} - An object containing the games data, loading state, error state, and a function to remove a game from the collection.
 */
const useFetchGames = () => {
    // State to store the fetched games.
    const [games, setGames] = useState([]);
    
    // State to track the loading status.
    const [loading, setLoading] = useState(true);
    
    // State to store any error that occurs during the fetch operation.
    const [error, setError] = useState(null);
    
    // Retrieve the authentication token.
    const token = getToken();

    useEffect(() => {
        // Function to fetch games data from the API.
        const fetchGames = async () => {
            try {
                // Send a GET request to the API to fetch the user's game collection.
                const response = await axios.get(`${API_BASE_URL}/user/collection`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Attach the token in the request headers for authorization.
                    }
                });

                // Update the games state with the fetched data.
                setGames(response.data.games);
            } catch (err) {
                // Handle any errors that occur during the fetch.
                setError('Failed to load games. ' + (err.response?.data?.message || err.message)); // Update the error state with a user-friendly message.
                console.error(err); // Log the error to the console for debugging.
            } finally {
                // Set loading to false regardless of success or failure.
                setLoading(false);
            }
        };

        // Trigger the fetchGames function to start fetching data.
        fetchGames();
    }, [token]); // Dependency array: re-run the effect if the token changes.

    /**
     * Function to remove a game from the collection by its ID.
     * 
     * @param {string} gameId - The ID of the game to remove.
     */
    const removeGame = (gameId) => {
        // Update the games state by filtering out the game with the specified ID.
        setGames((prevGames) => prevGames.filter((game) => game._id !== gameId));
    };

    // Return the games data, loading status, error state, and the removeGame function.
    return { games, loading, error, removeGame };
};

export default useFetchGames;
