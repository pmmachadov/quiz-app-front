import { useState, useEffect, useRef } from 'react';
import socket from '../socket'; // → Importar el socket desde socket.js

const useSocket = () => {
    const [socketInstance, setSocketInstance] = useState(null);
    const socketRef = useRef(socket);

    useEffect(() => {
        if (!socketRef.current || socketRef.current.disconnected) {
            socketRef.current.connect();
        }

        setSocketInstance(socketRef.current);

        socketRef.current.on('connect', () => {
            console.log('Connected to server');
        });

        socketRef.current.on('disconnect', (reason) => {
            console.log('Disconnected from server, reason:', reason);
            if (reason !== 'io client disconnect') {
                setTimeout(() => socketRef.current.connect(), 5000);
            }
        });

        socketRef.current.on('connect_error', (err) => {
            console.error('Connection error:', err);
        });

        const disconnectTimeout = setTimeout(() => {
            if (socketRef.current) {
                console.log('Disconnecting socket after 24 hours...');
                socketRef.current.disconnect();
            }
        }, 86400000); // 24 hours in milliseconds

        return () => {
            // Limpiar el timeout para evitar múltiples instancias si el componente se desmonta y se vuelve a montar
            clearTimeout(disconnectTimeout);
        };
    }, []);

    return socketInstance;
};

export default useSocket;
