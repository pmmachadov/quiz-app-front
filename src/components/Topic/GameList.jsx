import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const GameList = () => {
    const { games, setSelectedGame } = useContext(GameContext);

    if (games.length === 0) {
        return <div className="text-center text-xl">No games available</div>;
    }

    return (
        <div className="p-6 text-2xl font-bold mb-4">
            <h2 className="text-2xl font-bold mb-4">Choose a Game</h2>
            <ul className="list-none">
                { games.map((game) => (
                    <li key={ game.id } className="mb-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={ () => {
                                console.log(`Game selected: ${game.name}`);
                                setSelectedGame(game);
                            } }
                        >
                            { game.name }
                        </button>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default GameList;
