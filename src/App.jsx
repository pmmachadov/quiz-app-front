import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { AuthProvider } from './context/authContext';
import { StudentAuthProvider } from './context/StudentAuthContext';

function App() {
  return (
    <AuthProvider>
      <StudentAuthProvider>
        <Router>
          <RoutesWeb />
        </Router>
      </StudentAuthProvider>
    </AuthProvider>
  );
}

export default App;
