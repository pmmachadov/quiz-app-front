import React from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../../socket';
import PropTypes from 'prop-types';

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
    <button onClick={ handleClick } className="py-4 px-12 text-nowrap rounded-md bg-blue-300">
      Let Students Join
    </button>
  );
};


export default StartWaitingButton;


StartWaitingButton.propTypes = {
  topicId: PropTypes.string,
};
