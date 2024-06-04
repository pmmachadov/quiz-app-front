import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartWaitingButton = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleClick = () => {
    const gameCode = generateCode();
    setCode(gameCode);
    navigate('/waitingroom', { state: { gameCode } });
  };

  return (
    <button onClick={handleClick} className='py-4 px-12 text-nowrap rounded-md bg-blue-300'>
      Start Game
    </button>
  );
};

export default StartWaitingButton;
