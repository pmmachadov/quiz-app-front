import React from 'react';
import { GameProvider } from '../context/GameContext';
import GameList from '../components/Topic/GameList';
import QuestionList from '../components/Topic/QuestionList';

const Questions = () => {
    return (
        <GameProvider>
            <div className="App">
                <GameList />
                <QuestionList />
            </div>
        </GameProvider>
    );
};

export default Questions;