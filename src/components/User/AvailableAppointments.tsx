import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  useToast,
  Spinner,
  Center,
  Heading,
} from "@chakra-ui/react";
import { getAppointments, bookAppointment } from "../../hooks/api";
import { useAuth } from "../../contexts/AuthContext";
import BeigeBox from "../BeigeBox";

interface Booking {
  bookingId: number;
  email: string;
  timeslot: string;
}

const AvailableAppointments: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [appointments, setAppointments] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const toast = useToast();

  const generateTimeSlots = (date: Date) => {
    const slots = [];
    const startHour = 8;
    const endHour = 17;
    const slotDuration = 30;

    date.setHours(0, 0, 0, 0); // Sets to start of day

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += slotDuration) {
        const slot = new Date(date);
        slot.setHours(hour, minute, 0, 0);
        slots.push(slot);
      }
    }
    return slots;
  };

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

  useEffect(() => {
    fetchAppointments();
  }, [currentDate]);

  useEffect(() => {
    const today = new Date();
    if (today.toDateString() !== currentDate.toDateString()) {
      setCurrentDate(today);
    }
  }, []);

  const handleBookAppointment = async (timeslot: Date) => {
    try {
      await bookAppointment(timeslot);
      toast({
        title: "Appointment booked.",
        description: "Your appointment has been successfully booked.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      fetchAppointments();
    } catch (error) {
      toast({
        title: "Booking failed.",
        description: "There was an error booking your appointment.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const isSlotBooked = (slot: Date) => {
    return appointments.some(
      (appointment) =>
        new Date(appointment.timeslot).getTime() === slot.getTime()
    );
  };

  const userHasBooking = () => {
    return (
      isAuthenticated &&
      appointments.some(
        (appointment) => appointment.email === localStorage.getItem("userEmail")
      )
    );
  };

  const slots = generateTimeSlots(currentDate);

  return (
    <Box p={4} maxWidth="2500px" margin="0 auto">
      <Heading textAlign="center" as="h1" fontSize="35px" mb={4}>
        Available appointments
      </Heading>
      {loading ? (
        <Center height="100vh">
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {slots.map((slot, index) => (
            <BeigeBox key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Text>
                {slot.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => handleBookAppointment(slot)}
                isDisabled={
                  isSlotBooked(slot) || userHasBooking() || !isAuthenticated
                }
              >
                {isSlotBooked(slot) ? "Booked" : "Book"}
              </Button>
            </BeigeBox>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AvailableAppointments;
