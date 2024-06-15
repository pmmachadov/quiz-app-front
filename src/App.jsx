import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { AuthProvider } from './services/authContext';

function App() {
  useEffect(() => {  // <-- Añadido
    const socket = new WebSocket('ws://localhost:3000');  // <-- Añadido

    socket.addEventListener('open', function (event) {  // <-- Añadido
      console.log('Connected to WebSocket server');  // <-- Añadido
    });  // <-- Añadido

    socket.addEventListener('message', function (event) {  // <-- Añadido
      console.log('Message from server ', event.data);  // <-- Añadido
      // Aquí puedes manejar los mensajes recibidos del servidor  // <-- Añadido
    });  // <-- Añadido

    socket.addEventListener('close', function (event) {  // <-- Añadido
      console.log('Disconnected from WebSocket server');  // <-- Añadido
    });  // <-- Añadido

    return () => {  // <-- Añadido
      socket.close();  // <-- Añadido
    };  // <-- Añadido
  }, []);  // <-- Añadido

  return (
    <AuthProvider>
      <Router>
        <RoutesWeb />
      </Router>
    </AuthProvider>
  );
}

export default App;
