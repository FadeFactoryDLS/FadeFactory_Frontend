import React, { useEffect } from 'react';
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const Dashboard: React.FC = () => {

    useEffect(() => {
    }, []);

    return (
        <Box>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Placeholder</Th>
                        <Th>Placeholder</Th>
                        <Th>Placeholder</Th>
                        <Th>Placeholder</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Placeholder</Td>
                        <Td>Placeholder</Td>
                        <Td>Placeholder</Td>
                        <Td>Placeholder</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
};

export default Dashboard;