// gameActions.js
import axios from 'axios';
import { API_BASE_URL, getToken } from '../config';
import SuccessModal from '../modals/SuccessModal';
import FailModal from '../modals/FailModal';
import ConfirmModal from '../modals/ConfirmModal';

export const handleRemoveGame = async (gameId, onRemoveGame, openModal) => {
    try {
        const token = getToken();
        if (!token) {
            openModal(<FailModal message="You are not authenticated!" />);
            return;
        }

        const response = await axios.delete(`${API_BASE_URL}/user/collection/${gameId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            openModal(<SuccessModal message="Game removed from your collection!" />);
            onRemoveGame(gameId); // Update the parent component state
        }
    } catch (error) {
        console.error('Error removing game:', error);
        openModal(<FailModal message="Failed to remove the game." />);
    }
};

export const handleConfirmClick = (name, gameId, onRemoveGame, openModal, closeModal) => {
    openModal(
        <ConfirmModal 
            message={`Are you sure you want to remove ${name} from your collection?`}
            onConfirm={() => {
                handleRemoveGame(gameId, onRemoveGame, openModal);
                closeModal();
            }}
            onCancel={() => closeModal()}
        />
    );
};

export const handleAddGame = async (gameId, openModal) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        if (!token) {
            openModal(<FailModal message="You are not authenticated!" />);
            return;
        }

        const response = await axios.post('http://localhost:3000/games/add', { gameId }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        await new Promise(resolve => setTimeout(resolve, 3000));

        if (response.status === 200) {
            openModal(<SuccessModal message="Game added to your collection!" />);
        }
    } catch (error) {
        console.error('Error adding game:', error);
        openModal(<FailModal message="Failed to add the game." />);
    }
};
