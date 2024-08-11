import React, { useState } from "react";
import { deleteAppointment } from "../../hooks/api";
import { Box, Button, Input, useToast, Heading } from "@chakra-ui/react";
import BeigeBox from "../BeigeBox";

const DeleteAppointment: React.FC = () => {
  const [appointmentId, setAppointmentId] = useState<string>("");
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await deleteAppointment(appointmentId);
      toast({
        title: `Appointment with ID ${appointmentId} has been deleted`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAppointmentId("");
    } catch (error) {
      toast({
        title: "Error deleting appointment",
        description: `Unable to delete appointment with ID ${appointmentId}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Heading textAlign="center" as="h1" fontSize="35px" mb={4}>
        Delete an appointment
      </Heading>
      <BeigeBox
        width="300px"
        padding="6"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        mt={8}
      >
        <Input
          placeholder="Enter Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          mb={4}
        />
        <Button width="100%" colorScheme="red" onClick={handleDelete}>
          Delete Appointment
        </Button>
      </BeigeBox>
    </Box>
  );
};

export default DeleteAppointment;
