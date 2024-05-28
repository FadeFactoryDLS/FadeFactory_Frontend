import React from 'react';
import { Box } from '@chakra-ui/react';
import AvailableAppointments from './User/AvailableAppointments';

const Home: React.FC = () => {
    return (
        <Box p={4}>
            <AvailableAppointments />
        </Box>
    );
};

export default Home;