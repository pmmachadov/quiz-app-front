import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../services/authContext';

const PrivateRoute = () => {
  const { authState } = useContext(AuthContext);

  console.log('Auth state in PrivateRoute:', authState);

  if (!authState.isAuthenticated && !authState.isConfirmed) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
