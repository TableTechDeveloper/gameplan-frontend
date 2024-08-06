import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import ConfirmModal from '../modals/ConfirmModal';

const JoinEventButton = ({ eventId, eventTitle, refreshEvent }) => {
    const [joining, setJoining] = useState(false);
    const { openModal } = useContext(ModalContext);

    const handleJoinEvent = async () => {
        setJoining(true);
        try {
            const token = getToken();
            const response = await axios.post(`${API_BASE_URL}/events/${eventId}/register`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            openModal(<SuccessModal message={`You have joined the event: ${response.data.event.title}!`} />);
            refreshEvent(); // Call the refreshEvent callback
        } catch (error) {
            console.error('Error joining event:', error.response ? error.response.data : error.message);
            openModal(<ConfirmModal message={`Failed to join the event: ${error.response ? error.response.data.message : error.message}`} />);
        } finally {
            setJoining(false);
        }
    };

    return (
        <button className="button-primary" onClick={handleJoinEvent} disabled={joining}>
            {joining ? 'Joining...' : 'Join Event'}
        </button>
    );
};

export default JoinEventButton;
