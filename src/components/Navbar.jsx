// components/Navbar.tsx
import { Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="header"
      bg="black"
      color="white"
      py={4}
      px={8}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="center" align="center">
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          letterSpacing="widest"
          fontFamily="'Orbitron', sans-serif"
          bgGradient="linear(to-r, red.500, pink.400)"
          bgClip="text"
          textTransform="uppercase"
        >
          RAFKU
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
