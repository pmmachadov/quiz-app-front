import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const WaitingRoom = () => {
  const location = useLocation();
  const { gameCode } = location.state || {};
  const [participants, setParticipants] = useState(['Seg', 'Pablo', 'Ali']);

  return (
    <div className="flex flex-col items-center justify-center h-[65vh] bg-zinc-600 text-white">
      <h2 className="text-2xl mb-5">Enter the Join Code</h2>
      <div className="flex items-center bg-gray-300 text-black text-4xl py-2 px-16 rounded-lg mb-5">
        <span>{gameCode || 'XXXXXX'}</span>
        <button
          className="ml-2"
          onClick={() => navigator.clipboard.writeText(gameCode)}
        >
          📋
        </button>
      </div>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mb-5">
        Start
      </button>
      <div className="text-center">
        <p className="mb-2">Waiting For The Participants...</p>
        <p>Joined: {participants.join(', ')}</p>
      </div>
    </div>
  );
};

export default WaitingRoom;
