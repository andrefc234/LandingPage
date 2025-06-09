import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="nav" bg="black" color="white" px={6} py={4} boxShadow="lg">
      <Flex align="center">
        <Heading size="md" fontWeight="bold">
          Nombre del Artista
        </Heading>
        <Spacer />
        <Flex gap={4}>
          <Link href="#musica" _hover={{ color: "brand.primary" }}>
            Música
          </Link>
          <Link href="#contacto" _hover={{ color: "brand.primary" }}>
            Contacto
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
