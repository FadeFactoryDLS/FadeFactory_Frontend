import React, { useEffect, useState } from "react";
import { getAccountById, getAllAccounts } from "../../hooks/api";
import {
  Box,
  Button,
  Input,
  useToast,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  Center,
  Heading,
} from "@chakra-ui/react";

const GetUser: React.FC = () => {
  const [accountId, setAccountId] = useState<string>("");
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
          title: "Error getting users",
          description: "Unable to get users",
          status: "error",
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
          title: "Error getting user",
          description: `Unable to get user with ID ${accountId}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <Box p={4} maxWidth="1500px" margin="0 auto">
      <Heading textAlign="center" as="h1" fontSize="35px" mb={4}>
        All accounts
      </Heading>
      <Center>
        <HStack spacing={4} mt={8}>
          <Input
            placeholder="Enter Account ID"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            width="200px"
            borderColor="black"
          />
          <Button colorScheme="teal" onClick={handleSearch}>
            Search
          </Button>
        </HStack>
      </Center>
      <Table variant="simple" mt={12}>
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
              <Td borderColor="black">{user.accountId}</Td>
              <Td borderColor="black">{user.firstName}</Td>
              <Td borderColor="black">{user.email}</Td>
              <Td borderColor="black">{user.isAdmin ? "Yes" : "No"}</Td>
              <Td borderColor="black">{user.isPromotional ? "Yes" : "No"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default GetUser;
