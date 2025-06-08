// components/HeroSection.tsx
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      as="section"
      bgImage="url('/rafku-hero.jpg')"
      bgSize="cover"
      bgPosition="center"
      h={{ base: "100vh", md: "90vh" }}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
    >
      <VStack spacing={4} maxW="2xl">
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          RAFKU: Explícito. Acelerado. Real.
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} px={2}>
          Rapero y vocalista queretano forjado por la fusión de sonidos como el rock alternativo, mumble rap y reggaetón. Su estilo te golpea con “Trató Súbito”.
        </Text>
        <Button
          size="lg"
          bg="red.500"
          _hover={{ bg: "red.600" }}
          color="white"
        >
          Escucha Ahora
        </Button>
      </VStack>
    </Box>
  );
}
