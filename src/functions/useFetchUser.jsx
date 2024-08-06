import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

const useFetchUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = getToken();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log("User response:", response.data);
                setUser({
                    username: response.data.username,
                    email: response.data.email,
                    location: response.data.location,
                    bio: response.data.bio
                });
            } catch (err) {
                setError("Failed to load user information.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [token]);

    return { user, loading, error };
};

export default useFetchUser;
