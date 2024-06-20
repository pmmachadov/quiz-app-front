import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentRegisterOrLogin = () => {
    const [gameCode, setGameCode] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const joinGame = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/student/login`, {
                gameCode,
                username
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { game, student } = response.data;
            console.log('Joined game:', game, 'Student:', student);
            navigate('/student/waitingroom', { state: { gameCode } });
        } catch (error) {
            console.error('Error joining game:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-16">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Student Login</h1>
                <div className="mb-4">
                    <label htmlFor="gameCode" className="block text-gray-700 font-bold mb-2">Game Code</label>
                    <input
                        type="text"
                        id="gameCode"
                        placeholder="Enter Game Code"
                        value={ gameCode }
                        onChange={ (e) => setGameCode(e.target.value) }
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button
                    onClick={ joinGame }
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Join Game
                </button>
            </div>
        </div>
    );
};

export default StudentRegisterOrLogin;
