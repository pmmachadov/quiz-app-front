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

        return () => {
            // if (socketRef.current) {
            //     socketRef.current.disconnect();
            // }
        };
    }, []);

    return socketInstance;
};

export default useSocket;
