import React, { useState, useEffect } from "react";
import { getAccountById, updateAccount } from "../../hooks/api";
import { Box, Button, Input, useToast, Checkbox, FormControl, FormLabel, Grid } from "@chakra-ui/react";

const UpdateUser: React.FC<{}> = () => {
    const [accountId, setAccountId] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isPromotional, setIsPromotional] = useState<boolean>(false);
    const toast = useToast();

    useEffect(() => {
        const fetchUser = async () => {
            if (accountId) {
                try {
                    const user = await getAccountById(accountId);
                    setFirstName(user.firstName);
                    setEmail(user.email);
                    setIsAdmin(user.isAdmin);
                    setIsPromotional(user.isPromotional);
                } catch (error) {
                    toast({
                        title: 'Error fetching user',
                        description: `Unable to fetch user with ID ${accountId}`,
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                }
            }
        };

        fetchUser();
    }, [accountId, toast]);

    const handleUpdate = async () => {
        const currentData = await getAccountById(accountId); // Fetch current data
        const accountData = {
            accountId,
            firstName: firstName || currentData.firstName,
            email: email || currentData.email,
            isAdmin,
            isPromotional
        };

        try {
            await updateAccount(accountData);
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
        <Box display="flex" justifyContent="center" mt={10}>
            <Box width="300px" padding="6" borderWidth="1px" borderRadius="md" boxShadow="md">
                <FormControl marginBottom="4">
                    <FormLabel>Account ID</FormLabel>
                    <Input
                        placeholder="Enter Account ID"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                    />
                </FormControl>
                <FormControl marginBottom="4">
                    <FormLabel>First Name</FormLabel>
                    <Input
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </FormControl>
                <FormControl marginBottom="4">
                    <FormLabel>Email</FormLabel>
                    <Input
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <Box marginBottom="4">
                    <Checkbox
                        isChecked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        marginRight="4"
                    >
                        Admin
                    </Checkbox>
                    <Checkbox
                        isChecked={isPromotional}
                        onChange={(e) => setIsPromotional(e.target.checked)}
                    >
                        Promotional
                    </Checkbox>
                </Box>
                <Button width="100%" colorScheme="teal" onClick={handleUpdate}>Update Account</Button>
            </Box>
        </Box>
    );
};

export default UpdateUser;