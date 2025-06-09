import { Box, Heading } from '@chakra-ui/react';
export default function MusicPlayer() {
  return (
    <Box py={16} px={6} textAlign="center">
      <Heading as="h2" mb={8} color="teal.400">
        🎧 Escucha Ahora
      </Heading>
      <Box maxW="3xl" mx="auto" rounded="xl" overflow="hidden" shadow="lg">
       <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4YuFJgKHwqHHY5WxMpyWJO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Box>
    </Box>
  );
}
