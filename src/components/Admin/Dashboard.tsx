import React from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BookedAppointments from "./BookedAppointments";
import GetUser from "./GetUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import DeleteAppointment from "./DeleteAppointment";

const Dashboard: React.FC = () => {
  return (
    <Box justifyContent="center" p={4}>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab>Appointments</Tab>
          <Tab>Delete Apointment</Tab>
          <Tab>Users</Tab>
          <Tab>Delete User</Tab>
          <Tab>Update User</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BookedAppointments />
          </TabPanel>
            <TabPanel>
                <DeleteAppointment />
            </TabPanel>
          <TabPanel>
            <GetUser />
          </TabPanel>
          <TabPanel>
            <DeleteUser />
          </TabPanel>
          <TabPanel>
            <UpdateUser />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
