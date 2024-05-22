import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Checkbox, Alert, AlertIcon } from '@chakra-ui/react';
import { registerAccount } from '../../hooks/api';

const Register: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPromotional, setIsPromotional] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await registerAccount({ firstName, email, password, isPromotional });
            alert('User registered successfully!');
        } catch (err: any) {
            if (err.response && err.response.status === 409) {
                setError('Email is already in use');
            } else {
                setError('Failed to register user. Please try again.');
            }
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
            <Heading mb={6}>Register</Heading>
            {error && (
                <Alert status="error" mb={4}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="firstName">
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl id="isPromotional">
                        <Checkbox isChecked={isPromotional} onChange={(e) => setIsPromotional(e.target.checked)}>
                            Receive Promotional Emails
                        </Checkbox>
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
