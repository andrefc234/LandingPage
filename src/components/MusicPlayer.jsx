import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function MusicPlayer() {
  return (
    <Box id="musica" bg="gray.900" color="white" py={10} px={6}>
      <Heading textAlign="center" mb={4}>
        Escucha mi música
      </Heading>
      <Text textAlign="center" mb={6}>
        Disponible en todas las plataformas.
      </Text>

      <Flex justify="center" gap={4}>
        <Button
          as="a"
          href="https://open.spotify.com/"
          target="_blank"
          leftIcon={<FaSpotify />}
          colorScheme="green"
        >
          Spotify
        </Button>
        <Button
          as="a"
          href="https://youtube.com/"
          target="_blank"
          leftIcon={<FaYoutube />}
          colorScheme="red"
        >
          YouTube
        </Button>
      </Flex>
    </Box>
  );
}
