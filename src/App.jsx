import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import TeacherDashboard from './components/Dashboard/TeacherDashboard/TeacherDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/teacher-dashboard" element={ <TeacherDashboard /> } />
    </Routes>
  </Router>
);

export default App;
