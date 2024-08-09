import axios from 'axios';

const fetchGameSearch = async (query, API_BASE_URL, token, setGameData, setError) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games/search?query=${query}&strict=true`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setGameData(response.data.games); // Should be a single object in strict mode
        setError(null);
    } catch (error) {
        console.error("Error fetching game data:", error);
        setError(error.response?.data?.message || "An error occurred while searching for the game");
    }
};

export default fetchGameSearch;
