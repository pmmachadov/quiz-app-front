import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { FaGamepad, FaJs, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';

const getIcon = (name) => {
    switch (name.toLowerCase()) {
        case 'javascript':
            return <FaJs className="w-24 h-24 text-yellow-500 mb-4" />;
        case 'react.js':
            return <FaReact className="w-24 h-24 text-blue-400 mb-4" />;
        case 'node.js':
            return <FaNodeJs className="w-24 h-24 text-green-500 mb-4" />;
        case 'sql':
            return <FaDatabase className="w-24 h-24 text-gray-500 mb-4" />;
        default:
            return <FaGamepad className="w-24 h-24 text-gray-400 mb-4" />;
    }
};

const GameList = () => {
    const { games, setSelectedGame, getQuestionsByTopic } = useContext(GameContext);

    if (games.length === 0) {
        return <div className="text-center text-xl">No games available</div>;
    }

    return (
        <div className="p-6">
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold mb-6 text-center">Choose a Topic</h2>
            </div>
            <div className="flex justify-end">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-16" style={ { width: '50%' } }>
                    { games.map((game, index) => (
                        <div
                            key={ game.id }
                            className="relative bg-gray-200 rounded-lg shadow-md cursor-pointer transform transition duration-200 hover:scale-105"
                            style={ {
                                marginTop: index % 2 === 0 ? '0' : '40px',
                                width: '60%',
                                height: '0',
                                paddingBottom: '60%',
                            } }
                            onClick={ () => {
                                setSelectedGame(game);
                                getQuestionsByTopic(game.id);
                            } }
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                { getIcon(game.name) }
                                <h3 className="text-xl font-bold text-gray-800 text-center">{ game.name }</h3>
                                <p className="text-gray-600 text-center">{ game.questions_count } questions</p>
                                <p className="text-gray-600 text-center">{ game.time } sec</p>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default GameList;
