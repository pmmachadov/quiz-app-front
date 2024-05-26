import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/user';

export const register = async (firstName, lastName, email, password) => {
  const name = `${firstName} ${lastName}`;
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};
