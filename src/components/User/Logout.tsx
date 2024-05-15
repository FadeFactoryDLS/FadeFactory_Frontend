import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

const UserLogout: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/user/login');
    }, [logout, navigate]);

    return (
        <Box p={4}>
            <Spinner />
        </Box>
    );
};

export default UserLogout;
