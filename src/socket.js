import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';
const socket = io(SOCKET_URL);

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

export function getTopics() {
    socket.emit('getTopics');
}

socket.on('topics', (topics) => {
    console.log('Received topics:', topics);
});

export function getQuestionsByTopic(topicId) {
    socket.emit('getQuestionsByTopic', topicId);
}

socket.on('questions', (questions) => {
    console.log('Received questions:', questions);
});

export function startGame(topicId) {
    socket.emit('startGame', topicId);
}


socket.on('gameStarted', ({ gameCode }) => {
    console.log("Game started with code received from server:", gameCode);
    navigate('/student/waitingroom', { state: { gameCode } });
});

socket.on('studentsInRoom', (students) => {
    console.log('Students in room:', students);
});

export default socket;
