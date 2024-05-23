import React from 'react';

const Stats = ({ players }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
      <h2 className="text-2xl font-bold mb-4">Stats</h2>
      <div className="flex flex-col">
        {players.map((player, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-6">{index + 1}</span>
            <div className="flex-1 bg-gray-200 h-4 mx-2 rounded-full relative">
              {player.answers.map((answer, i) => (
                <span
                  key={i}
                  className={`absolute h-4 rounded-full ${answer.correct ? 'bg-green-500' : 'bg-gray-400'}`}
                  style={{ left: `${(i / player.answers.length) * 100}%`, width: `${(1 / player.answers.length) * 100}%` }}
                >
                  {answer.correct && <span className="text-white text-xs">{answer.number}</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;