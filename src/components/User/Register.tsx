import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import api from '../../api';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await api.post('/users', { username, password });
        alert('User registered successfully!');
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
            <Heading mb={6}>Register</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">
                        Register
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Register;
