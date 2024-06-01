// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../services/authContext';

const PrivateRoute = () => {
  const { authState } = useContext(AuthContext);

  return authState.isAuthenticated && authState.isConfirmed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;