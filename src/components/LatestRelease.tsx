// components/LatestRelease.tsx
import { Box, Heading, Text, Image, Button, Stack, Link } from "@chakra-ui/react";

export default function LatestRelease() {
  return (
    <Box
      as="section"
      py={12}
      px={6}
      maxW="6xl"
      mx="auto"
      textAlign="center"
      bg="gray.900"
      color="white"
      borderRadius="xl"
    >
      <Heading fontSize="3xl" mb={4}>
        Nuevo Lanzamiento: "killer"
      </Heading>
      <Text fontSize="lg" mb={6}>
        Experimenta la energía cruda y acelerada de RAFKU en su track más explosivo hasta ahora.
      </Text>

      <Image
        src="/killer.jpg"
        alt="Portada Trató Súbito"
        borderRadius="lg"
        mb={6}
        mx="auto"
        maxH="300px"
      />

      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://spfy.oia.bio/rafku" isExternal>
          <Button colorScheme="red" size="lg">
            Escuchar en Spotify
          </Button>
        </Link>

        <Link href="https://killer.oia.bio/YT" isExternal>
          <Button colorScheme="whiteAlpha" size="lg" variant="outline">
            Ver en YouTube
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
