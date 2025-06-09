// components/LatestRelease.tsx
import { Box, Heading, Text, Image, Button, Stack, Link } from "@chakra-ui/react";

export default function LatestRelease() {
  return (
    <Box
      as="section"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 6 }}
      maxW="6xl"
      mx="auto"
      textAlign="center"
      bg="gray.900"
      color="white"
      borderRadius="xl"
      role="region"
      aria-labelledby="latest-release-heading"
    >
      <Heading
        as="h2"
        id="latest-release-heading"
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={{ base: 3, md: 4 }}
        fontWeight="bold"
      >
        Nuevo Lanzamiento: "killer"
      </Heading>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        mb={{ base: 4, md: 6 }}
        px={{ base: 2, md: 0 }}
        lineHeight="tall"
      >
        Experimenta la energía cruda y acelerada de RAFKU en su track más explosivo hasta ahora.
      </Text>

      <Image
        src="/Killer.jpg"
        alt="Portada del sencillo 'Killer' de RAFKU"
        borderRadius="lg"
        mb={{ base: 4, md: 6 }}
        mx="auto"
        maxH={{ base: "200px", md: "300px" }}
        objectFit="cover"
        loading="lazy"
      />

      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 3, sm: 4 }}
        justify="center"
        align="center"
      >
        <Link
          href="https://spfy.oia.bio/rafku"
          isExternal
          rel="noopener noreferrer"
          aria-label="Escuchar en Spotify"
          width={{ base: "100%", sm: "auto" }}
        >
          <Button colorScheme="red" size="lg" width="100%">
            Escuchar en Spotify
          </Button>
        </Link>

        <Link
          href="https://killer.oia.bio/YT"
          isExternal
          rel="noopener noreferrer"
          aria-label="Ver en YouTube"
          width={{ base: "100%", sm: "auto" }}
        >
          <Button
            colorScheme="whiteAlpha"
            size="lg"
            variant="outline"
            width="100%"
          >
            Ver en YouTube
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
