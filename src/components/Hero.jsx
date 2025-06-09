// components/HeroSection.tsx
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      bgImage="url('/miniatura1.jpg')"
      bgSize="cover"
      bgPosition="center"
      h={{ base: "100vh", md: "90vh" }}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        bg: "blackAlpha.700",
        zIndex: 0,
      }}
    >
      <VStack spacing={6} maxW="2xl" zIndex={1}>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="extrabold"
          fontFamily="'Orbitron', sans-serif"
          letterSpacing="wider"
          textShadow="0 2px 8px rgba(0,0,0,0.7)"
          lineHeight="1.2"
        >
          RAFKU: Explícito. Acelerado. Real.
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          px={2}
          fontWeight="medium"
          textShadow="0 1px 5px rgba(0,0,0,0.8)"
          lineHeight="1.5"
          letterSpacing="wide"
        >
          Rapero y vocalista queretano forjado por la fusión de sonidos como el rock alternativo, mumble rap y reggaetón. Su estilo te golpea con “Trató Súbito”.
        </Text>
        <Button
          size="lg"
          bgGradient="linear(to-r, red.500, pink.400)"
          _hover={{ bgGradient: "linear(to-r, red.600, pink.500)" }}
          color="white"
          fontWeight="bold"
          boxShadow="0 4px 15px rgba(255, 77, 109, 0.6)"
          _active={{
            transform: "scale(0.95)",
            boxShadow: "0 2px 10px rgba(255, 77, 109, 0.8)",
          }}
        >
          Escucha Ahora
        </Button>
      </VStack>
    </Box>
  );
}
