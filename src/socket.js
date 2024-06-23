// src/socket.js (Frontend)
import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';
const socket = io(SOCKET_URL, {
    withCredentials: true // Asegúrate de que las cookies se envíen correctamente
});

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

// Emitir un evento personalizado que los componentes pueden escuchar para la navegación
socket.on('gameStarted', ({ gameCode }) => {
    console.log("Game started with code received from server:", gameCode);
    socket.emit('gameStartedEvent', { gameCode });
});

socket.on('studentsInRoom', (students) => {
    console.log('Students in room:', students);
});

export default socket;
