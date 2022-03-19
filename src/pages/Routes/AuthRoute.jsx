import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Nav from '../../components/NavBar/Nav';
import { AuthContext } from '../../context/AuthContext';

/**
 * This component will be used to wrap everything that needs Authentication to access. It uses the
 * 'AuthContext' to check whether the user is authenticated. If yes, then it will continue to show
 * the requested components, otherewise the user is redirected to '/login' which is the login screen.
 */
export default function AuthRoute() {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return (
      <Nav>
        <Outlet />
      </Nav>
    );
  }

  return <Navigate to="/login" />;
}
