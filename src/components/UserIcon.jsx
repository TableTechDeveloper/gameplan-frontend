import React from 'react';
import useFetchUser from "../functions/useFetchUser";

const UserIcon = () => {
    const { user, loading: userLoading, error: userError } = useFetchUser();

    if (userLoading) {
        return <h2>Loading...</h2>;
    }

    if (userError) {
        return <h2>Error: {userError}</h2>;
    }

    // const initial = user ? user.username.charAt(0).toUpperCase() : 'G';


    return (
        // <h2>Welcome {initial}</h2>
        <h2>Welcome {user ? user.username : 'Guest'}</h2>
    );
};

export default UserIcon;
