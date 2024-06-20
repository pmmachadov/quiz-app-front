import React, { createContext, useState, useEffect, useMemo } from 'react';
import socket from '../socket';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        socket.on('topics', (data) => {
            console.log('Received topics:', data);
            setGames(data);
        });

        console.log('Emitting getTopics');
        socket.emit('getTopics');

        return () => {
            socket.off('topics');
        };
    }, []);

    useEffect(() => {
        if (selectedGame) {
            console.log('Emitting getQuestionsByTopic for game:', selectedGame.id);
            socket.emit('getQuestionsByTopic', selectedGame.id);

            socket.on('questions', (data) => {
                console.log('Received questions:', data);
                setQuestions(data);
            });

            return () => {
                socket.off('questions');
            };
        }
    }, [selectedGame]);

    useEffect(() => {
        socket.on('gameStarted', ({ gameCode }) => {
            console.log("Game started with code received from server:", gameCode);
            navigate('/student/waitingroom', { state: { gameCode } });
        });

        socket.on('studentsInRoom', (students) => {
            console.log('Students in room:', students);
        });

        return () => {
            socket.off('gameStarted');
            socket.off('studentsInRoom');
        };
    }, [navigate]);

    const startGame = (topicId) => {
        socket.emit('startGame', topicId);
    };

    const getQuestionsByTopic = (topicId) => {
        socket.emit('getQuestionsByTopic', topicId);
    };

    const value = useMemo(() => ({
        games,
        selectedGame,
        setSelectedGame,
        questions,
        startGame,
        getQuestionsByTopic
    }), [games, selectedGame, questions, startGame, getQuestionsByTopic]);

    return (
        <GameContext.Provider value={ value }>
            { children }
        </GameContext.Provider>
    );
};

GameProvider.propTypes = {
    children: PropTypes.node
};

export default GameProvider;
