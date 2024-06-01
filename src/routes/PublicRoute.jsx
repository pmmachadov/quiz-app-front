import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../services/authContext';

const PublicRoute = () => {
  const { authState } = useContext(AuthContext);

  return !authState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/questions" />
  );
};

export default PublicRoute;
