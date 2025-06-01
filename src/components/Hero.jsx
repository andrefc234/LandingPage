// src/components/Hero.jsx
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      w="100%"
      h={{ base: "60vh", md: "100vh" }}          // 60 % del alto en móvil, pantalla completa en desktop
      bgImage="url('/portadakiller.jpg')"        // la imagen está en /public
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      {/* Capa oscura opcional para mejorar legibilidad */}
      <Box
        position="absolute"
        inset="0"
        bg="blackAlpha.600"                       // oscurece ligeramente la foto
        zIndex={0}
      />

      {/* Contenedor del texto centrado */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        px={4}
        zIndex={1}
      >
        <Heading
          color="white"
          fontSize={{ base: "4xl", md: "6xl" }}
          textTransform="uppercase"
        >
          Nombre del Artista
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "2xl" }}
          color="whiteAlpha.800"
        >
          Sonido urbano, puro estilo.
        </Text>
      </Box>
    </Box>
  );
}
