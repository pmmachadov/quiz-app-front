import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { AuthProvider } from './context/authContext';
import { StudentAuthProvider } from './context/StudentAuthContext';
import { SocketProvider } from './context/SocketContext';
import SocketComponent from './components/SocketComponent/SocketComponent';


function App() {
  return (
    <AuthProvider>
      <StudentAuthProvider>
        <Router>
          <SocketProvider>
            <RoutesWeb />
            <SocketComponent />
          </SocketProvider>
        </Router>
      </StudentAuthProvider>
    </AuthProvider>
  );
}

export default App;
