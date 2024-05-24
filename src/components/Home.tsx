import React from 'react';
import { Spinner, Box, Text } from '@chakra-ui/react';


const Home: React.FC = () => {

    return (
        <Box p={4}>
            <Text
                fontSize="xl" mb={4}>
                Available appointments
            </Text>
            <Spinner size="xl" />
        </Box>
    );
};

export default Home;