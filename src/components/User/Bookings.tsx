import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem, Spinner, Center } from '@chakra-ui/react';
import api from '../../hooks/api';
import { useAuth } from '../../contexts/AuthContext';

interface Booking {
    bookingId: number;
    email: string;
    timeslot: string;
}

const Bookings: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const allBookings = await api.getAppointments();
                const userEmail = localStorage.getItem('userEmail');
                const userBookings = allBookings.filter((booking: Booking) => booking.email === userEmail);
                setBookings(userBookings);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch bookings');
                setLoading(false);
            }
        };

        if (isAuthenticated) {
            fetchBookings();
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <div>Please log in to see your bookings.</div>;
    }

    return (
        <Box p={4}>
            <Text fontSize="xl" mb={4}>Your Bookings</Text>
            {loading ? (
                <Center height="100vh">
                    <Spinner size="xl" />
                </Center>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    {bookings.map((booking) => (
                        <GridItem key={booking.bookingId} p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
                            <Text fontWeight="bold">
                                {new Date(booking.timeslot).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })} - {new Date(booking.timeslot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </Text>
                            <Text>Booking ID: {booking.bookingId}</Text>
                        </GridItem>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Bookings;