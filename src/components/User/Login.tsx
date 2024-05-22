import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { loginAccount } from '../../hooks/api';

const UserLogin: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginAccount({ firstName, password });
            login(data.token); // Assuming the API returns a token
            navigate('/user/dashboard');
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
            <Heading mb={6}>User Login</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="firstName">
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">
                        Login
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default UserLogin;
