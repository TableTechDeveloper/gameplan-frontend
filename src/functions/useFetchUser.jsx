import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';

const useFetchUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = getToken();
                console.log("Fetching user with token:", token);
                const response = await axios.get(`${API_BASE_URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("API response:", response);
                console.log("User data:", response.data); // Log the entire data object

                // Set the user data directly since it's in response.data, not response.data.user
                setUser(response.data);
            } catch (error) {
                setError("Failed to load user.");
                console.error("Failed to load user:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
};

export default useFetchUser;
