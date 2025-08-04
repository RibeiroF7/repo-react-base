import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// Se você controla autenticação no Redux, descomente e ajuste:
// import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children, requireAuth = false, isLoggedIn = false }) {
  const location = useLocation();

  // Substitua `isLoggedIn` pela lógica real, por exemplo via Redux:
  // const isLoggedIn = useSelector(state => !!state.auth?.token);

  if (requireAuth && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requireAuth: PropTypes.bool,
  isLoggedIn: PropTypes.bool, // opcional para override em testes
};

ProtectedRoute.defaultProps = {
  requireAuth: false,
  isLoggedIn: false,
};
