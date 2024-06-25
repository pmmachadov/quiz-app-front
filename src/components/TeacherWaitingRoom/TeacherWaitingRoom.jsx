import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socket from '../../socket';

const TeacherWaitingRoom = () => {
    const location = useLocation();
    const { gameCode } = location.state || {};
    const [students, setStudents] = useState([]);

    useEffect(() => {
        socket.emit('joinGame', { gameCode, username: 'Teacher' });

        socket.on('studentsInRoom', (students) => {
            const uniqueStudents = students.reduce((unique, student) => {
                if (!unique.some(u => u.id === student.id)) {
                    unique.push(student);
                }
                return unique;
            }, []);
            setStudents(uniqueStudents);
        });

        return () => {
            socket.off('studentsInRoom');
        };
    }, [gameCode]);

    const startGame = () => {
        socket.emit('startGame', { gameCode });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-4">Waiting Room</h1>
                <h2 className="text-lg mb-4">Game Code: <span className="font-mono">{ gameCode }</span></h2>
                <div className="bg-gray-200 p-4 rounded mb-4">
                    <h3 className="font-bold mb-2">Joined Students:</h3>
                    <ul>
                        { students.map((student) => (
                            <li key={ `${student.id}-${student.username}` } className="text-left">{ student.username }</li>
                        )) }
                    </ul>
                </div>
                <button onClick={ startGame } className="bg-blue-500 text-white py-2 px-4 rounded">Start Game</button>
                <p className="text-gray-700">Waiting for students to join...</p>
            </div>
        </div>
    );
};

export default TeacherWaitingRoom;
