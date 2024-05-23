import React from 'react';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const UserDashboard: React.FC = () => {
    return (
        <Box p={4}>
            <Heading mb={4}>User Dashboard</Heading>
            <Stack spacing={4}>
                <Button as={Link} to="/user/book" colorScheme="teal">
                    Book Appointment
                </Button>
                <Button as={Link} to="/user/logout" colorScheme="teal">
                    Logout
                </Button>
            </Stack>
        </Box>
    );
};

export default UserDashboard;