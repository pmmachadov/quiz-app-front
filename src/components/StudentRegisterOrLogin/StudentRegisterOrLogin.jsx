import React, { useState } from 'react';
import socket from '../../socket';
import { useNavigate } from 'react-router-dom';

const StudentRegisterOrLoginPage = () => {
    const [gameCode, setGameCode] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const joinGame = () => {
        socket.emit('joinGame', { gameCode, username });

        socket.on('joinedGame', ({ game, student }) => {
            console.log('Joined game:', game, 'Student:', student);
            navigate('/student/waitingroom', { state: { gameCode } });
        });

        socket.on('error', (errorMessage) => {
            console.error(errorMessage);
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Game Code"
                value={ gameCode }
                onChange={ (e) => setGameCode(e.target.value) }
            />
            <input
                type="text"
                placeholder="Username"
                value={ username }
                onChange={ (e) => setUsername(e.target.value) }
            />
            <button onClick={ joinGame }>Join Game</button>
        </div>
    );
};

export default StudentRegisterOrLoginPage;
