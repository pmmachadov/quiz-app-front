import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [questions, setQuestions] = useState([]);  // <-- Añadido

    useEffect(() => {
        const fetchGames = async () => {
            console.log('Fetching games...');
            try {
                const response = await axios.get('http://localhost:3000/api/topics');
                console.log('Games fetched:', response.data);
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
                console.log(`Fetching questions for game ID: ${selectedGame.id}`);
                try {
                    const response = await axios.get(`http://localhost:3000/api/topics/${selectedGame.id}/questions`);
                    console.log('Questions fetched:', response.data);
                    setQuestions(response.data);
                } catch (error) {
                    console.error('Error fetching questions:', error);
                }
            };

            fetchQuestions();
        }
    }, [selectedGame]);

    return useMemo(() => (
        <GameContext.Provider value={ { games, selectedGame, setSelectedGame, questions, setQuestions } }>
            { children }
        </GameContext.Provider>
    ), [games, selectedGame, questions]);
};
