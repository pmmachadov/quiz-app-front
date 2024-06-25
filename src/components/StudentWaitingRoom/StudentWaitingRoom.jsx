import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socket from '../../socket';

const StudentWaitingRoom = () => {
    const location = useLocation();
    const { gameCode, student } = location.state || {};
    const [students, setStudents] = useState([]);

    console.log('gameCode:', gameCode);
    console.log('student:', student);

    useEffect(() => {
        if (gameCode && student && student.username) {
            socket.emit('joinGame', { gameCode, username: student.username });
            const handleStudentsInRoom = (students) => {
                const uniqueStudents = Array.from(new Set(students.map(s => s.username)))
                    .map(username => students.find(s => s.username === username));
                setStudents(uniqueStudents);
            };

            socket.off('studentsInRoom');
            socket.on('studentsInRoom', handleStudentsInRoom);

            return () => {
                socket.off('studentsInRoom', handleStudentsInRoom);
            };
        } else {
            console.error('Invalid game code or student information.');
        }
    }, [gameCode, student]);

    if (!gameCode || !student) {
        return <p>Invalid game code or student information.</p>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-4">Waiting Room</h1>
                <h2 className="text-lg mb-4">Game Code: <span className="font-mono">{ gameCode }</span></h2>
                <div className="bg-gray-200 p-4 rounded mb-4">
                    <h3 className="font-bold mb-2">Joined Students:</h3>
                    <ul>
                        { students.map((student) => (
                            <li key={ student.username } className="text-left">{ student.username }</li>
                        )) }
                    </ul>
                </div>
                <p className="text-gray-700">Waiting for the game to start...</p>
            </div>
        </div>
    );
};

export default StudentWaitingRoom;
