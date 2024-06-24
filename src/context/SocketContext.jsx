import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../socket';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const socketInstance = useMemo(() => socket, []);
    const navigate = useNavigate();

    useEffect(() => {

        socketInstance.on('gameStartedEvent', ({ gameCode }) => {
            navigate('/student/studentWaitingRoom', { state: { gameCode } });
        });

        return () => {
            console.log('Cleaning up...');
        };
    }, [socketInstance, navigate]);

    return (
        <SocketContext.Provider value={ socketInstance }>
            { children }
        </SocketContext.Provider>
    );
};
