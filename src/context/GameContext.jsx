import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/topics');
                setGames(response.data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        if (selectedGame) {
            const fetchQuestions = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/topics/${selectedGame.id}/questions`);
                    setQuestions(response.data);
                } catch (error) {
                    console.error('Error fetching questions:', error);
                }
            };

            fetchQuestions();
        }
    }, [selectedGame]);

    return (
        <GameContext.Provider value={ { games, selectedGame, setSelectedGame, questions } }>
            { children }
        </GameContext.Provider>
    );
};
