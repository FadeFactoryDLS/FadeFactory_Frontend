import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, List, ListItem, Stack } from '@chakra-ui/react';
import api from '../../hooks/api';

const BookAppointment: React.FC = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableAppointments, setAvailableAppointments] = useState([]);

    useEffect(() => {
        const fetchAvailableAppointments = async () => {
            const response = await api.get('/appointments/available');
            setAvailableAppointments(response.data);
        };

        fetchAvailableAppointments();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await api.post('/appointments', { date, time });
        alert('Appointment booked successfully!');
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} boxShadow="md" borderRadius="md">
            <Heading mb={6}>Book Appointment</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="date">
                        <FormLabel>Date</FormLabel>
                        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </FormControl>
                    <FormControl id="time">
                        <FormLabel>Time</FormLabel>
                        <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">
                        Book
                    </Button>
                </Stack>
            </form>

            <Heading size="md" mt={6}>Available Appointments</Heading>
            <List spacing={3}>
                {availableAppointments.map((appointment: any) => (
                    <ListItem key={appointment.id}>
                        {appointment.date} - {appointment.time}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default BookAppointment;
