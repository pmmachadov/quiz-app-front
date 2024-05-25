import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Score from '../pages/Score';
import Terms from '../pages/Terms';
import TeacherDashboard from './components/Dashboard/TeacherDashboard/TeacherDashboard';

function RoutesWeb() {
  return (
    
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/score" element={<Score />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/teacher-dashboard" element={ <TeacherDashboard /> } />
        </Routes>
      </>
    
  );
}

export default RoutesWeb;
