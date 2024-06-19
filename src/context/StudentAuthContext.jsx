import React, { createContext, useState, useEffect } from 'react';
import { registerOrLoginStudent as loginService, logoutStudent as logoutService } from '../services/authService';
import PropTypes from 'prop-types';

export const StudentAuthContext = createContext();

export const StudentAuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        token: null,
        icon: null,
    });

    useEffect(() => {
        const student = JSON.parse(localStorage.getItem('student'));
        if (student) {
            setAuthState({
                isAuthenticated: true,
                token: student.token,
                icon: student.icon,
            });
        }
    }, []);

    const login = async (code, username) => {
        try {
            const response = await loginService(code, username);
            localStorage.setItem('student', JSON.stringify({
                token: response.token,
                icon: response.icon,
            }));
            setAuthState({
                isAuthenticated: true,
                token: response.token,
                icon: response.icon,
            });
            console.log('Auth state updated:', {
                isAuthenticated: true,
                token: response.token,
                icon: response.icon,
            });
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = () => {
        logoutService();
        localStorage.removeItem('student');
        setAuthState({
            isAuthenticated: false,
            token: null,
            icon: null,
        });
    };

    return (
        <StudentAuthContext.Provider value={ { authState, login, logout } }>
            { children }
        </StudentAuthContext.Provider>
    );
};

StudentAuthProvider.propTypes = {
    children: PropTypes.node,
};
