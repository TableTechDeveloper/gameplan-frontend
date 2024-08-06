import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ModalContext } from '../pages/_TemplatePage';
import SuccessModal from '../modals/SuccessModal';
import ConfirmModal from '../modals/ConfirmModal';
import { API_BASE_URL, getToken } from '../config';

const CancelEventButton = ({ eventId }) => {
    const navigate = useNavigate();
    const { openModal, closeModal } = useContext(ModalContext);

    const handleCancelEvent = () => {
        openModal(
            <ConfirmModal
                message="Are you sure you want to cancel this event?"
                onConfirm={async () => {
                    try {
                        const token = getToken();
                        await axios.delete(`${API_BASE_URL}/events/${eventId}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        openModal(<SuccessModal message="Event cancelled successfully!" />);
                        closeModal();
                        navigate('/myevents');
                    } catch (error) {
                        console.error('Error cancelling event:', error);
                        openModal(<SuccessModal message="Failed to cancel the event." />);
                    }
                }}
                onCancel={() => closeModal()}
            />
        );
    };

    return (
        <button className="button-cancel" onClick={handleCancelEvent}>
            Cancel Event
        </button>
    );
};

export default CancelEventButton;
