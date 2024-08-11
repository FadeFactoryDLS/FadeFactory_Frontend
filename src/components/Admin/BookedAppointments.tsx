import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  List,
  ListItem,
  Spinner,
  Text,
  Heading,
} from "@chakra-ui/react";
import { getAppointments } from "../../hooks/api";
import BeigeBox from "../BeigeBox";

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
        setError("Failed to fetch appointments");
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
    <Box p={4} maxWidth="1500px" margin="0 auto">
      <Heading textAlign="center" as="h1" fontSize="35px" mb={4}>
        Booked appointments
      </Heading>
      <List spacing={3} styleType="none" mt={8}>
        {appointments.map((appointment) => (
          <BeigeBox 
            key={appointment.bookingId}
            p={3}
            borderWidth="1px"
            borderRadius="lg"
          >
            <Text fontSize="18px" mb={4}>
              <strong>Email:</strong> {appointment.email}
            </Text>
            <Text fontSize="18px" mb={4}>
              <strong>Timeslot:</strong>{" "}
              {new Date(appointment.timeslot).toLocaleString()}
            </Text>
          </BeigeBox>
        ))}
      </List>
    </Box>
  );
};
export default BookedAppointments;
