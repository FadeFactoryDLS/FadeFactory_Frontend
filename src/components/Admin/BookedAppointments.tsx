import React, { useEffect, useState } from 'react';
import { Box, Center, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { getAppointments } from '../../hooks/api';

interface Booking {
    bookingId: number;
    email: string;
    timeslot: string;
}

const BookedAppointments: React.FC = () => {
    const [appointments, setAppointments] = useState<Booking[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const data = await getAppointments();
                setAppointments(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch appointments');
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) {
        return (
            <Center height="100vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Box p={4}>
            <Text fontSize="xl" mb={4}>Booked appointments</Text>
            <List spacing={3} styleType="none">
                {appointments.map(appointment => (
                    <ListItem key={appointment.bookingId} p={3} borderWidth="1px" borderRadius="lg">
                        <Text><strong>Email:</strong> {appointment.email}</Text>
                        <Text><strong>Timeslot:</strong> {new Date(appointment.timeslot).toLocaleString()}</Text>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
export default BookedAppointments;