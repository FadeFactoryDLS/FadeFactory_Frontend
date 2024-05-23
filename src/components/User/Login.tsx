import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Alert, AlertIcon } from '@chakra-ui/react';
import { loginAccount } from '../../hooks/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [FirstName] = useState('string');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const token = await loginAccount({ FirstName, email, password });
            login(token);
            navigate('/user/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
            <Heading mb={6}>User Login</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    {error && (
                        <Alert status="error">
                            <AlertIcon />
                            {error}
                        </Alert>
                    )}
                    <Button type="submit" colorScheme="teal" width="full">
                        Login
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Login;