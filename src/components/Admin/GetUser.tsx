import React, { useEffect, useState } from "react";
import { getAccountById, getAllAccounts } from "../../hooks/api";
import { Box, Button, Input, useToast, Table, Tbody, Td, Th, Thead, Tr, HStack, Center } from "@chakra-ui/react";

const GetUser: React.FC = () => {
    const [accountId, setAccountId] = useState<string>('');
    const [users, setUsers] = useState<any[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
    const toast = useToast();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getAllAccounts();
                setUsers(usersData);
                setFilteredUsers(usersData);
            } catch (error) {
                toast({
                    title: 'Error getting users',
                    description: 'Unable to get users',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };
        fetchUsers();
    }, [toast]);

    const handleSearch = async () => {
        if (accountId) {
            try {
                const user = await getAccountById(accountId);
                setFilteredUsers([user]);
            } catch (error) {
                toast({
                    title: 'Error getting user',
                    description: `Unable to get user with ID ${accountId}`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        } else {
            setFilteredUsers(users);
        }
    };

    return (
        <Box p={4}>
            <Center>
                <HStack spacing={4}>
                    <Input
                        placeholder="Enter Account ID"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        width="200px"
                    />
                    <Button colorScheme="teal" onClick={handleSearch}>Search</Button>
                </HStack>
            </Center>
            <Table variant="simple" mt={4}>
                <Thead>
                    <Tr>
                        <Th>Account ID</Th>
                        <Th>First Name</Th>
                        <Th>Email</Th>
                        <Th>Admin</Th>
                        <Th>Promotional</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredUsers.map((user) => (
                        <Tr key={user.accountId}>
                            <Td>{user.accountId}</Td>
                            <Td>{user.firstName}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.isAdmin ? 'Yes' : 'No'}</Td>
                            <Td>{user.isPromotional ? 'Yes' : 'No'}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default GetUser;