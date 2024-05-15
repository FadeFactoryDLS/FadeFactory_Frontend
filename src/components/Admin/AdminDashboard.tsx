import React from 'react';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    return (
        <Box p={4}>
            <Heading mb={4}>Admin Dashboard</Heading>
            <Stack spacing={4}>
                <Button as={Link} to="/admin/appointments" colorScheme="teal">
                    View Booked Appointments
                </Button>
                <Button as={Link} to="/admin/logout" colorScheme="teal">
                    Logout
                </Button>
            </Stack>
        </Box>
    );
};

export default AdminDashboard;
