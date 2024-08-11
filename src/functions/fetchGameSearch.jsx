import axios from 'axios';

/**
 * Fetches game data based on the provided search query and updates the state accordingly.
 * 
 * @param {string} query - The search query for the game.
 * @param {string} API_BASE_URL - The base URL of the API.
 * @param {string} token - The authentication token used for the request.
 * @param {Function} setGameData - Function to update the game data in the state.
 * @param {Function} setError - Function to update the error state in case of a failure.
 */
const fetchGameSearch = async (query, API_BASE_URL, token, setGameData, setError) => {
    try {
        // Send a GET request to the API to search for a game based on the query.
        // The request includes the authorization token in the headers.
        console.log("Game searched for is: ", query)
        const response = await axios.get(`${API_BASE_URL}/games/search?query=${query}&strict=true`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            timeout: 3000
        });
        console.log("SERVER RESPONSE: ", response)

        // Update the state with the retrieved game data.
        // In strict mode, this should be a single game object.
        setGameData(response.data.games);

        // Clear any previous errors.
        setError(null);
    } catch (error) {
        // Log the error to the console for debugging.
        console.error("Error fetching game data:", error);

        // Update the error state with a user-friendly message or the message from the API response.
        setError(error.response?.data?.message || "An error occurred while searching for the game");
    }
};

export default fetchGameSearch;
