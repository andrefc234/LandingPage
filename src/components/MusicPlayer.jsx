import { Box, Heading } from '@chakra-ui/react';
export default function MusicPlayer() {
  return (
    <Box py={16} px={6} textAlign="center">
      <Heading as="h2" mb={8} color="teal.400">
        🎧 Escucha Ahora
      </Heading>
      <Box maxW="3xl" mx="auto" rounded="xl" overflow="hidden" shadow="lg">
        <iframe
          src="https://open.spotify.com/embed/track/TU-TRACK-ID"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
