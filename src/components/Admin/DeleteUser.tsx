import React, { useState } from "react";
import { deleteAccount, getAccountById, getAppointments, deleteAppointment } from "../../hooks/api";
import { Box, Button, Input, useToast } from "@chakra-ui/react";

const DeleteUser: React.FC = () => {
    const [accountId, setAccountId] = useState<string>('');
    const toast = useToast();

    const handleDelete = async () => {
        try {
            const account = await getAccountById(accountId);
            const email = account.email;
            const allBookings = await getAppointments();
            const userBookings = allBookings.filter((booking: any) => booking.email === email);

            for (const booking of userBookings) {
                await deleteAppointment(booking.bookingId);
            }

            await deleteAccount(accountId);

            toast({
                title: `User with ID ${accountId} has been deleted along with their bookings`,
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
        <Box p={4} display="flex" flexDirection="column" alignItems="center">
            <Box width="300px" padding="6" borderWidth="1px" borderRadius="md" boxShadow="md">
                <Input
                    placeholder="Enter Account ID"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    marginBottom="4"
                />
                <Button width="100%" colorScheme="red" onClick={handleDelete}>
                    Delete Account
                </Button>
            </Box>
        </Box>
    );
};

export default DeleteUser;