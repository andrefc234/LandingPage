import { Box, Heading } from '@chakra-ui/react';

export default function MusicPlayer() {
  return (
    <Box py={16} px={6} textAlign="center">
      <Heading as="h2" mb={8} color="teal.400" fontSize="3xl">
        🎧 Escucha Ahora
      </Heading>

      <Box
        maxW="3xl"
        mx="auto"
        rounded="2xl"
        overflow="hidden"
        shadow="2xl"
        border="2px solid"
        borderColor="teal.500"
      >
        <Box
          as="iframe"
          src="https://open.spotify.com/embed/album/4YuFJgKHwqHHY5WxMpyWJO?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          borderRadius="12px"
          sx={{
            border: 'none',
          }}
        />
      </Box>
    </Box>
  );
}
