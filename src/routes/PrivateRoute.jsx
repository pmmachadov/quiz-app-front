import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = () => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuthenticated && !authState.isConfirmed) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

