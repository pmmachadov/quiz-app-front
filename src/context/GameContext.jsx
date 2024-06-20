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
            console.log('Received topics:', data); // Agregar esta línea para depuración
            setGames(data);
        });

        console.log('Emitting getTopics'); // Agregar esta línea para depuración
        socket.emit('getTopics');

        return () => {
            socket.off('topics');
        };
    }, []);

    useEffect(() => {
        if (selectedGame) {
            console.log('Emitting getQuestionsByTopic for game:', selectedGame.id); // Agregar esta línea para depuración
            socket.emit('getQuestionsByTopic', selectedGame.id);

            socket.on('questions', (data) => {
                console.log('Received questions:', data); // Agregar esta línea para depuración
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

GameProvider.propTypes = {
    children: PropTypes.node
};

export default GameProvider;
