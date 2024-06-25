import React, { useEffect } from 'react';
import useSocket from '../../hooks/useSocket';

// Componente que usa el hook personalizado para manejar la conexión socket.io
const SocketComponent = () => {
    const socket = useSocket('http://localhost:3000');

    useEffect(() => {
        if (!socket) return;

        // Manejar la conexión abierta
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        // Manejar la recepción de mensajes
        socket.on('message', (message) => {
            console.log('Received message:', message);
        });

        // Manejar la desconexión
        socket.on('disconnect', (reason) => {
            console.log('Disconnected from server, reason:', reason);
        });

        // Manejar errores de conexión
        socket.on('connect_error', (err) => {
            console.error('Connection error:', err);
        });

        // Ejemplo de manejo de eventos personalizados
        socket.on('joinSuccess', ({ game, student }) => {
            console.log('Join success:', { game, student });
        });

        // Limpiar los event listeners al desmontar el componente
        return () => {
            socket.off('connect');
            socket.off('message');
            socket.off('disconnect');
            socket.off('connect_error');
            socket.off('joinSuccess');
        };
    }, [socket]); // Dependencia de la instancia de socket

    return (
        <div>
            <h1>Socket Component</h1>
            <p>Check the console for WebSocket events.</p>
        </div>
    );
};

export default SocketComponent;
