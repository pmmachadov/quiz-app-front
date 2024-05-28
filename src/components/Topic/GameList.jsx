import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';

const GameList = () => {
    const { games, setSelectedGame, fetchQuestions } = useContext(GameContext);
    const navigate = useNavigate();

    const handleGameClick = (game) => {
        setSelectedGame(game);
        fetchQuestions(game.id);
        navigate('/questions');
    };

    return (
        <div>
            <h2>Choose a Game</h2>
            <ul>
                { games.map(game => (
                    <li key={ game.id } onClick={ () => handleGameClick(game) }>
                        { game.name }
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default GameList;
