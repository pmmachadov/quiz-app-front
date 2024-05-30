import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Score from '../pages/Score';
import Terms from '../pages/Terms';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ConfirmEmail from '../components/ConfirmEmail/ConfirmEmail';
import TeacherDashboard from '../components/Dashboard/TeacherDashboard/TeacherDashboard';
import Layout from "../components/Layout/Layout";
import Questions from '../pages/Questions';

function RoutesWeb() {
  return (
    <Routes>
      <Route path="/" element={ <Layout><Home /></Layout> } />
      <Route path="/about" element={ <Layout><About /></Layout> } />
      <Route path="/contact" element={ <Layout><Contact /></Layout> } />
      <Route path="/faq" element={ <Layout><FAQ /></Layout> } />
      <Route path="/score" element={ <Layout><Score /></Layout> } />
      <Route path="/terms" element={ <Layout><Terms /></Layout> } />
      <Route path="/teacher-dashboard" element={ <Layout><TeacherDashboard /></Layout> } />
      <Route path="/register" element={ <Layout><RegisterPage /></Layout> } />
      <Route path="/login" element={ <Layout><LoginPage /></Layout> } />
      <Route path="/confirm/:token" element={ <ConfirmEmail /> } />
      <Route path="/questions" element={ <Layout><Questions /></Layout> } />
    </Routes>
  );
}

export default RoutesWeb;
