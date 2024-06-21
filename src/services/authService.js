import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/user';
const STUDENT_API_URL = import.meta.env.VITE_API_URL + '/student';

export const registerTeacher = async (firstName, lastName, email, password) => {
  const name = `${firstName} ${lastName}`;
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

export const registerOrLoginStudent = async (code, username) => {
  const response = await axios.post(`${STUDENT_API_URL}/registerOrLogin`, { code, username });
  if (response.data.token) {
    localStorage.setItem('student', JSON.stringify(response.data));
  }
  return response.data;
};

export const loginTeacher = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const logoutStudent = () => {
  localStorage.removeItem('student');
};

export const logoutTeacher = () => {
  localStorage.removeItem('user');
};
