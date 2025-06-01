import { Box, Text, Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      id="contacto"
      bg="black"
      color="gray.400"
      py={6}
      px={4}
      textAlign="center"
    >
      <Flex direction="column" gap={2} align="center">
        <Text fontSize="sm">© {new Date().getFullYear()} Nombre del Artista</Text>
        <Link href="mailto:contacto@artista.com" color="brand.secondary">
          contacto@artista.com
        </Link>
      </Flex>
    </Box>
  );
}
