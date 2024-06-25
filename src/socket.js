import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';
const socket = io(SOCKET_URL, {
    transports: ['websocket'], // ➔ Asegurarse de que esta línea esté presente
    withCredentials: true,
    reconnection: true, // ➔ Habilitar la reconexión
    reconnectionAttempts: Infinity, // ➔ Reintentar infinitamente
    reconnectionDelay: 1000, // ➔ Esperar 1 segundo antes de reintentar
    reconnectionDelayMax: 5000, // ➔ Esperar un máximo de 5 segundos entre reintentos
    timeout: 20000,
    pingTimeout: 60000,
});

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', (reason) => {
    console.log('Disconnected from server, reason:', reason);
    setTimeout(() => {
        socket.connect();
    }, 5000);
});

socket.on('connect_error', (err) => {
    console.log('Connection error:', err);
});

socket.on('reconnect_attempt', () => {
    console.log('Reconnection attempt...');
});

socket.on('reconnect_failed', () => {
    console.log('Reconnection failed.');
});

socket.on('reconnect', (attemptNumber) => {
    console.log('Reconnected successfully on attempt:', attemptNumber);
});

socket.on('error', (err) => {
    console.error('Socket encountered error:', err);
    socket.disconnect();
});

export function startGame(topicId) {
    socket.emit('startGame', topicId);
}

socket.on('gameStarted', ({ gameCode }) => {
    console.log("Game started with code received from server:", gameCode);
    socket.emit('gameStartedEvent', { gameCode });
});

socket.on('studentsInRoom', (students) => {
    console.log('Students in room:', students);
});

export function getTopics() {
    console.log('Emitting getTopics event');
    socket.emit('getTopics');
}

socket.on('topics', (topics) => {
    console.log('Received topics:', topics);
});

export function getQuestionsByTopic(topicId) {
    console.log('Emitting getQuestionsByTopic event');
    socket.emit('getQuestionsByTopic', topicId);
}

socket.on('questions', (questions) => {
    console.log('Received questions:', questions);
});

export default socket;
