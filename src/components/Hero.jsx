import { Box, Heading, Text, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      bgGradient="linear(to-br, brand.primary, brand.secondary)"
      p={10}
      textAlign="center"
    >
      <Image
        src="/IMG_20230826_120053_374.jpg"
        alt="Portada del artista"
        mx="auto"
        borderRadius="lg"
        maxW="300px"
      />
      <Heading mt={6} color="white">
        Nombre del Artista
      </Heading>
      <Text fontSize="xl" mt={2} color="whiteAlpha.800">
        Sonido urbano, puro estilo.
      </Text>
    </Box>
  );
}
