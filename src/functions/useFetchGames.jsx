import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

const useFetchGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = getToken();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user/collection`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setGames(response.data.games);
            } catch (err) {
                setError('Failed to load games. ' + (err.response?.data?.message || err.message));
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, [token]);

    const removeGame = (gameId) => {
        setGames((prevGames) => prevGames.filter((game) => game._id !== gameId));
    };

    return { games, loading, error, removeGame };
};

export default useFetchGames;
