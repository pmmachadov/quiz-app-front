import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './routes/Routes';
import { TeacherAuthProvider } from '../src/context/GameContext';
import { StudentAuthProvider } from '../src/context/StudentAuthContext';

function App() {
  return (
    <TeacherAuthProvider>
      <StudentAuthProvider>
        <Router>
          <RoutesWeb />
        </Router>
      </StudentAuthProvider>
    </TeacherAuthProvider>
  );
}

export default App;
