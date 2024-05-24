import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface PublicRouteProps {
    element: React.ReactElement;
    redirectPath: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element, redirectPath }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to={redirectPath} />;
    }

    return element;
};

export default PublicRoute;