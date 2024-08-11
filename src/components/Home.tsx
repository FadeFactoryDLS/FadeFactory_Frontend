import React from "react";
import { Box } from "@chakra-ui/react";
import BookAppointment from "./User/AvailableAppointments";

const Home: React.FC = () => {
  return (
    <Box p={4}>
      <BookAppointment />
    </Box>
  );
};

export default Home;
