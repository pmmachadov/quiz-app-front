import { useNavigate } from 'react-router-dom';
import socket from '../../socket';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StartWaitingButton = ({ topicId }) => {

  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleClick = () => {
    const gameCode = generateCode();
    setCode(gameCode);
    socket.emit('startGame', topicId);
    navigate('/waitingroom', { state: { gameCode } });
  };

  socket.on('gameStarted', ({ gameCode }) => {
    console.log("Game started with code received from server:", gameCode);
    navigate('/waitingroom', { state: { gameCode } });
  });

  socket.on('error', (errorMessage) => {
    console.error(errorMessage);
  });

  return (
    <button onClick={ handleClick } className="py-4 px-12 text-nowrap rounded-md bg-blue-300">
      Let Students Join
    </button>
  );
};


export default StartWaitingButton;

StartWaitingButton.propTypes = {
  topicId: PropTypes.string
};



