import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ReactElement;
    requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, requiredRole }) => {
    const { isAuthenticated, role } = useAuth();

    if (!isAuthenticated || (requiredRole && role !== requiredRole)) {
        return <Navigate to="/" />;
    }

    return element;
};

export default ProtectedRoute;