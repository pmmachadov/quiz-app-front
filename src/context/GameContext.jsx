import React, { createContext, useState, useEffect } from 'react';
import socket from '../socket';
import PropTypes from 'prop-types';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        socket.on('topics', (data) => {
            setGames(data);
        });

        socket.emit('getTopics');

        return () => {
            socket.off('topics');
        };
    }, []);

    useEffect(() => {
        if (selectedGame) {
            socket.emit('getQuestionsByTopic', selectedGame.id);

            socket.on('questions', (data) => {
                setQuestions(data);
            });

            return () => {
                socket.off('questions');
            };
        }
    }, [selectedGame]);

    return (
        <GameContext.Provider value={ { games, selectedGame, setSelectedGame, questions } }>
            { children }
        </GameContext.Provider>
    );
};

export default GameProvider;

GameProvider.propTypes = {
    children: PropTypes.node
};