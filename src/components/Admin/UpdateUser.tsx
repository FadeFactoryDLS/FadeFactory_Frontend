import React, { useState } from "react";
import { updateAccount } from "../../hooks/api";
import { Box, Button, Input, useToast, Checkbox } from "@chakra-ui/react";

const UpdateUser: React.FC = () => {
    const [accountId, setAccountId] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isPromotional , setIsPromotional] = useState<boolean>(false);
    const toast = useToast();

    const handleUpdate = async () => {
        const accountData = { accountId, firstName, email, isAdmin, isPromotional };
        try {
            await updateAccount(accountId, accountData);
            toast({
                title: `User with ID ${accountId} has been updated`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setAccountId('');
            setFirstName('');
            setEmail('');
            setIsAdmin(false);
            setIsPromotional(false);
        } catch (error) {
            toast({
                title: 'Error updating account',
                description: `Unable to update user with ID ${accountId}`,
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
            <Input
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Checkbox
                isChecked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
            >
                Admin
            </Checkbox>
            <Checkbox
                isChecked={isPromotional}
                onChange={(e) => setIsPromotional(e.target.checked)}
            >
                Promotional
            </Checkbox>
            <Button mt={4} colorScheme="teal" onClick={handleUpdate}>Update Account</Button>
        </Box>
    );
};

export default UpdateUser;