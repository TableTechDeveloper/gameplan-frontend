import React, { useContext } from 'react';
import axios from 'axios';
import { ModalContext } from '../pages/_TemplatePage';
import "../styles/Card.css";
import SuccessModal from '../modals/SuccessModal';
import FailModal from '../modals/FailModal';
import ConfirmModal from '../modals/ConfirmModal';
import { API_BASE_URL, getToken } from '../config';

const GameOwnedCard = ({ gameId, name, minPlayers, maxPlayers, playtime, image, onRemoveGame }) => {
    const { openModal, closeModal } = useContext(ModalContext);

    const handleRemoveGame = async () => {
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

    const handleConfirmClick = () => {
        openModal(
            <ConfirmModal 
                message={`Are you sure you want to remove ${name} from your collection?`}
                onConfirm={() => {
                    handleRemoveGame();
                    closeModal();
                }}
                onCancel={() => closeModal()}
            />
        );
    };

    return (
        <div className="card">
            <div className="card-details">
                <h3>{name}</h3>
                <p>Min Players: {minPlayers}</p>
                <p>Max Players: {maxPlayers}</p>
                <p>Playtime: {playtime} minutes</p>
                <button className="button-cancel" onClick={handleConfirmClick}>Remove Game</button>
            </div>
            <div className='game-image'>
                {image ? <img src={image} alt={`${name} cover`} /> : 'No image available'}
            </div>
        </div>
    );
};

export default GameOwnedCard;
