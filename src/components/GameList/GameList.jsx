import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import { useNavigate } from 'react-router-dom';

const GameList = () => {
    const { games, setSelectedGame, fetchQuestions } = useContext(GameContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Games in GameList:', games); // Debug log to check games data
    }, [games]);

    const handleGameClick = async (game) => {
        setSelectedGame(game);
        await fetchQuestions(game.id);
        navigate('/questions');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Choose a Game</h2>
            <div className="flex flex-wrap gap-4">
                { Array.isArray(games) && games.length > 0 ? (
                    games.map(game => (
                        <button
                            key={ game.id }
                            onClick={ () => handleGameClick(game) }
                            className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 border border-gray-300 p-4 rounded shadow"
                        >
                            { game.name }
                        </button>
                    ))
                ) : (
                    <p>No games available</p>
                ) }
            </div>
        </div>
    );
};

export default GameList;
