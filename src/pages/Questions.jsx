import React, { useEffect, useState, useContext } from 'react';
import { GameProvider, GameContext } from '../context/GameContext';
import GameList from '../components/Topic/GameList';
import QuestionList from '../components/Topic/QuestionList';

const Questions = () => {
    const { setQuestions } = useContext(GameContext);  // <-- Añadido

    useEffect(() => {  // <-- Añadido
        const socket = new WebSocket('ws://localhost:3000');  // <-- Añadido

        socket.addEventListener('open', function (event) {  // <-- Añadido
            console.log('Connected to WebSocket server');  // <-- Añadido
        });  // <-- Añadido

        socket.addEventListener('message', function (event) {  // <-- Añadido
            console.log('Message from server ', event.data);  // <-- Añadido
            // Aquí puedes manejar los mensajes recibidos del servidor  // <-- Añadido
            setQuestions(prevQuestions => [...prevQuestions, event.data]);  // <-- Añadido
        });  // <-- Añadido

        socket.addEventListener('close', function (event) {  // <-- Añadido
            console.log('Disconnected from WebSocket server');  // <-- Añadido
        });  // <-- Añadido

        return () => {  // <-- Añadido
            socket.close();  // <-- Añadido
        };  // <-- Añadido
    }, [setQuestions]);  // <-- Añadido

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
