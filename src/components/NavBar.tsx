import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const NavBar: React.FC = () => {
    const { isAuthenticated, role, logout } = useAuth();

    return (
        <Box bg="teal.500" p={4}>
            <HStack spacing={4} justifyContent="space-between">
                <HStack spacing={4}>
                    <Button
                        as={Link}
                        to="/"
                        colorScheme="teal"
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "teal.600" }}
                    >
                        Fade Factory
                    </Button>
                </HStack>
                <HStack spacing={4}>
                    {isAuthenticated && role === 'Admin' && (
                        <Button
                            as={Link}
                            to="/admin/dashboard"
                            colorScheme="teal"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: "teal.600" }}
                        >
                            Dashboard
                        </Button>
                    )}
                    {!isAuthenticated ? (
                        <>
                            <Button
                                as={Link}
                                to="/login"
                                colorScheme="teal"
                                variant="solid"
                                color="white"
                                _hover={{ bg: "teal.600" }}
                            >
                                Login
                            </Button>
                            <Button
                                as={Link}
                                to="/register"
                                colorScheme="teal"
                                variant="ghost"
                                color="white"
                                _hover={{ bg: "teal.600" }}
                            >
                                Register
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => {
                                logout();
                            }}
                            colorScheme="teal"
                            variant="solid"
                            color="white"
                            _hover={{ bg: "teal.600" }}
                        >
                            Logout
                        </Button>
                    )}
                </HStack>
            </HStack>
        </Box>
    );
};

export default NavBar;