// src/App.jsx (Frontend)
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { AuthProvider } from './context/authContext';
import { StudentAuthProvider } from './context/StudentAuthContext';
import { SocketProvider } from './context/SocketContext'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <AuthProvider>
      <StudentAuthProvider>
        <Router>
          <SocketProvider> {/* Envolver con el SocketProvider */ }
            <RoutesWeb />
          </SocketProvider>
        </Router>
      </StudentAuthProvider>
    </AuthProvider>
  );
}

export default App;
