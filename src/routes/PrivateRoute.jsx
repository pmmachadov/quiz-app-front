import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../services/authContext';

const PrivateRoute = () => {
  const { authState } = useContext(AuthContext);

  console.log('Auth state in PrivateRoute:', authState);

  return authState.isAuthenticated && authState.isConfirmed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
