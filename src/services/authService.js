import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/user';
const STUDENT_API_URL = import.meta.env.VITE_API_URL + '/student';

// Función para registrar profesores
export const registerTeacher = async (firstName, lastName, email, password) => {
  const name = `${firstName} ${lastName}`;
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

// Función para registrar o iniciar sesión como estudiante
export const registerOrLoginStudent = async (code, username) => {
  const response = await axios.post(`${STUDENT_API_URL}/registerOrLogin`, { code, username });
  if (response.data.token) {
    localStorage.setItem('student', JSON.stringify(response.data));
  }
  return response.data;
};

// Función para iniciar sesión como profesor
export const loginTeacher = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Función para cerrar sesión de estudiante
export const logoutStudent = () => {
  localStorage.removeItem('student');
};

// Función para cerrar sesión de profesor
export const logoutTeacher = () => {
  localStorage.removeItem('user');
};
