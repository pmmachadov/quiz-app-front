import React from 'react';
import { useLocation } from 'react-router-dom';

const WaitingRoom = () => {
  const location = useLocation();
  const { gameCode } = location.state || {};

  return (
    <div>
      <h1>Waiting Room</h1>
      {gameCode ? (
        <p>Your game code is: <strong>{gameCode}</strong></p>
      ) : (
        <p>No game code available.</p>
      )}
    </div>
  );
};

export default WaitingRoom;
