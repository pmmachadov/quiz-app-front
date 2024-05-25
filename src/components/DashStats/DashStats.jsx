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
    <div className="flex flex items-start justify-center  bg-gray-300 p-4">
      
        <Stats players={playersData} />


        <div>
        <TopThree topPlayers />
      
        <div className='flex ml-10 gap-6'>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Download Stats</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Exit</button>
        </div>
        </div>
    </div>
  );
};

export default DashStats;
