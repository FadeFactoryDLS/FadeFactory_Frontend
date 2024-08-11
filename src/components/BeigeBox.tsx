import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const BeigeBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor="#F4F0E5"
      borderColor="black"
      zIndex={1}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      {...props}
    >
      {children}
    </Box>
  );
};

export default BeigeBox;