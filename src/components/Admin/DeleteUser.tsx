import React, { useState } from "react";
import { deleteAccount } from "../../hooks/api";
import { Box, Button, Input, useToast } from "@chakra-ui/react";

const DeleteUser: React.FC = () => {
    const [accountId, setAccountId] = useState<string>('');
    const toast = useToast();

    const handleDelete = async () => {
        try {
            await deleteAccount(accountId);
            toast({
                title: `User with ID ${accountId} has been deleted`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setAccountId('');
        } catch (error) {
            toast({
                title: 'Error deleting account',
                description: `Unable to delete user with ID ${accountId}`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={4}>
            <Input
                placeholder="Enter Account ID"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
            />
            <Button mt={4} colorScheme="red" onClick={handleDelete}>Delete Account</Button>
        </Box>
    );
};

export default DeleteUser;