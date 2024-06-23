// src/context/SocketContext.js (Frontend)
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../socket'; // Importar el socket desde socket.js

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const socketInstance = useMemo(() => socket, []);
    const navigate = useNavigate(); // Usar el hook useNavigate

    useEffect(() => {
        // Manejar el evento de navegación dentro del contexto
        socketInstance.on('gameStartedEvent', ({ gameCode }) => {
            navigate('/student/studentwaitingroom', { state: { gameCode } });
        });

        return () => {
            console.log('Disconnecting socket...');
            socketInstance.disconnect();
        };
    }, [socketInstance, navigate]);

    return (
        <SocketContext.Provider value={ socketInstance }>
            { children }
        </SocketContext.Provider>
    );
};
