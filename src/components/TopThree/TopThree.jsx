import React from 'react';

const TopThree = ({ topPlayers }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
      <h2 className="text-2xl font-bold mb-4">Top 3</h2>
      <div className="flex justify-around">
        {topPlayers.map((player, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={player.avatar} alt={player.name} className="w-24 h-24 mb-2 rounded-full" />
            <span className="text-xl font-bold">{player.name}</span>
            <span className="bg-gray-200 text-black rounded-full px-2 mt-2">{index + 1}st</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopThree;
