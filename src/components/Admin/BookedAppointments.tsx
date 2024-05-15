import React, { useEffect, useState } from 'react';
import { Box, Heading, List, ListItem, Spinner } from '@chakra-ui/react';
import api from '../../api';

const BookedAppointments: React.FC = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await api.get('/appointments');
            setAppointments(response.data);
        };

        fetchAppointments();
    }, []);

    return (
        <Box p={4}>
            <Heading mb={4}>Booked Appointments</Heading>
            {appointments.length === 0 ? (
                <Spinner />
            ) : (
                <List spacing={3}>
                    {appointments.map((appointment: any) => (
                        <ListItem key={appointment.id}>
                            {appointment.date} - {appointment.time} - {appointment.user}
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default BookedAppointments;
