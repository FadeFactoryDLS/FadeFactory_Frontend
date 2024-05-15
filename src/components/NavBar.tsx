import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const NavBar: React.FC = () => {
    const { isAuthenticated, role } = useAuth();

    return (
        <Box bg="teal.500" p={4}>
            <HStack spacing={4}>
                <Button
                    as={Link}
                    to="/"
                    colorScheme="teal"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: "teal.600" }}
                >
                    Home
                </Button>
                {isAuthenticated ? (
                    <>
                        {role === 'admin' && (
                            <Button
                                as={Link}
                                to="/admin/dashboard"
                                colorScheme="teal"
                                variant="ghost"
                                color="white"
                                _hover={{ bg: "teal.600" }}
                            >
                                Admin Dashboard
                            </Button>
                        )}
                        {role === 'user' && (
                            <Button
                                as={Link}
                                to="/user/dashboard"
                                colorScheme="teal"
                                variant="ghost"
                                color="white"
                                _hover={{ bg: "teal.600" }}
                            >
                                User Dashboard
                            </Button>
                        )}
                    </>
                ) : (
                    <>
                        <Button
                            as={Link}
                            to="/user/login"
                            colorScheme="teal"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: "teal.600" }}
                        >
                            User Login
                        </Button>
                        <Button
                            as={Link}
                            to="/user/register"
                            colorScheme="teal"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: "teal.600" }}
                        >
                            Register
                        </Button>
                        <Button
                            as={Link}
                            to="/admin/login"
                            colorScheme="teal"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: "teal.600" }}
                        >
                            Admin Login
                        </Button>
                    </>
                )}
            </HStack>
        </Box>
    );
};

export default NavBar;
