import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import { loginAccount } from '../../hooks/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [firstName] = useState('string');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await loginAccount({ firstName, email, password });
            login(token);
            navigate('/');
        } catch (err) {
            toast({
                title: 'Invalid credentials',
                description: 'Please check your email and password and try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} boxShadow="xl" borderRadius="md">
            <Heading mb={6}>Login</Heading>
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
                    <Button type="submit" colorScheme="teal" width="full">
                        Login
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Login;