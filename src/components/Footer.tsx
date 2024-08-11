import React from "react";
import {
  Box,
  HStack,
  Text,
  Image,
  Link as ChakraLink,
  Spacer,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      width="100%"
      position="fixed"
      bottom={0}
      bg="teal.500"
      p={2}
      borderTop="1px solid"
      borderColor="teal.600"
    >
      <HStack pl={12} spacing={10} justify="flex-start">
        <ChakraLink href="https://www.facebook.com" isExternal color="white">
          <Box display="flex" alignItems="center">
            <Image
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
              alt="Facebook"
              boxSize="24px"
            />
            Facebook
          </Box>
        </ChakraLink>
        <ChakraLink href="https://www.twitter.com" isExternal color="white">
          <Box display="flex" alignItems="center">
            <Image
              src="https://cdn-icons-png.freepik.com/256/5969/5969020.png?semt=ais_hybrid"
              alt="Twitter"
              boxSize="24px"
            />
            Twitter
          </Box>
        </ChakraLink>
        <ChakraLink href="https://www.instagram.com" isExternal color="white">
          <Box display="flex" alignItems="center">
            <Image
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
              alt="Instagram"
              boxSize="24px"
            />
            Instagram
          </Box>
        </ChakraLink>
        <Spacer />
        <Box display="flex">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
            alt="Fade Factory"
            boxSize="24px"
          />
          <Text color="white">Email: Fade@factory.com</Text>
          <Image
            src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid"
            alt="Fade Factory"
            boxSize="24px"
            ml={10}
          />
          <Text color="white">Phone: +45 12 34 56 78</Text>
          <Box ml={10} />
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
