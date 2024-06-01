import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, logout as logoutService } from './authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isConfirmed: false,
    token: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setAuthState({
        isAuthenticated: true,
        isConfirmed: user.isConfirmed || false,
        token: user.token,
      });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginService(email, password);
      localStorage.setItem('user', JSON.stringify({
        token: response.token,
        isConfirmed: response.isConfirmed,
      }));
      setAuthState({
        isAuthenticated: true,
        isConfirmed: response.isConfirmed,
        token: response.token,
      });
      console.log('Auth state updated:', {
        isAuthenticated: true,
        isConfirmed: response.isConfirmed,
        token: response.token,
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    logoutService();
    localStorage.removeItem('user');
    setAuthState({
      isAuthenticated: false,
      isConfirmed: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
