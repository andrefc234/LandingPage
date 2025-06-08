import { Box, Text, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" py={6} textAlign="center" bg="gray.900" color="gray.400">
      <Text>© {new Date().getFullYear()} Rafku. Todos los derechos reservados.</Text>
      <Text>
        Hecho con ❤️ por <Link href="https://4ndr3.online/" isExternal color="teal.300">4ndr3</Link>
      </Text>
    </Box>
  );
}
