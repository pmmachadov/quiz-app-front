import React from 'react';
import Stats from '../Stats/Stats';
import TopThree from '../TopThree/TopThree';

const playersData = [
  {
    name: 'Player 1',
    answers: [
      { correct: true, number: 2 },
      { correct: false, number: 5 },
      { correct: true, number: 10 },
    ],
  },
  // ... más jugadores
];

const topPlayersData = [
  { name: 'Ali', avatar: '/path/to/ali-avatar.png' },
  { name: 'Pablo', avatar: '/path/to/pablo-avatar.png' },
  { name: 'Edgar', avatar: '/path/to/edgar-avatar.png' },
];

const DashStats = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300 p-4">
      <div className="flex justify-between w-full mb-4">
        <Stats players={playersData} />
        <TopThree topPlayers={topPlayersData} />
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Download Stats</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Exit</button>
      </div>
    </div>
  );
};

export default DashStats;
