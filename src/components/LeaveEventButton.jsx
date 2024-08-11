import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import ConfirmModal from '../modals/ConfirmModal';

const LeaveEventButton = ({ eventId, eventTitle, refreshEvent }) => {
    const [leaving, setLeaving] = useState(false);
    const { openModal } = useContext(ModalContext);

    const handleLeaveEvent = async () => {
        setLeaving(true);
        try {
            const token = getToken();
            const response = await axios.delete(`${API_BASE_URL}/events/${eventId}/leave`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log({response});
            // Since the backend might not return the event title, use the eventTitle prop for the message
            openModal(<SuccessModal message={`You have left the event: ${eventTitle}.`} />);
            refreshEvent(); // Call the refreshEvent callback to update the page
        } catch (error) {
            console.error('Error leaving event:', error.response ? error.response.data : error.message);
            openModal(<ConfirmModal message={`Failed to leave the event: ${error.response ? error.response.data.message : error.message}`} />);
        } finally {
            setLeaving(false);
        }
    };

    return (
        <button className="button-cancel" onClick={handleLeaveEvent} disabled={leaving}>
            {leaving ? 'Leaving...' : 'Leave Event'}
        </button>
    );
};

export default LeaveEventButton;