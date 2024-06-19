import React from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../socket';
import PropTypes from 'prop-types';
import InputCode from '../components/InputCode/InputCode';

const StartWaitingButton = ({ topicId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Button clicked, emitting startGame event with topicId:", topicId);
        socket.emit('startGame', topicId);

        socket.on('gameStarted', ({ gameCode }) => {
            console.log("Game started with code received from server:", gameCode);
            navigate('/student/waitingroom', { state: { gameCode } });
        });

        socket.on('error', (errorMessage) => {
            console.error(errorMessage);
        });
    };

    return (

        <InputCode handleClick={ handleClick } />

    );
};

StartWaitingButton.propTypes = {
    topicId: PropTypes.string,
};

export default StartWaitingButton;
