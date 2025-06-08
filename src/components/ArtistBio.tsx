// components/ArtistBio.tsx
import { Box, Heading, Text, Stack, Tag } from "@chakra-ui/react";

export default function ArtistBio() {
  return (
    <Box as="section" py={10} px={6} maxW="5xl" mx="auto">
      <Heading fontSize="2xl" mb={4} textAlign="center">
        Influencias & Estilo
      </Heading>
      <Text fontSize="lg" textAlign="center" mb={6}>
        RAFKU se define por una mezcla de géneros intensos: desde las vibras del rock alternativo, hasta los beats del reggaetón y el susurro del mumble rap. Su lírica acelera y rompe moldes con alto nivel de presencia y entrega total.
      </Text>

      <Stack direction="row" justify="center" spacing={4} flexWrap="wrap">
        {["Rock Alternativo", "Mumble Rap", "Reggaetón", "Trap", "Lirical", "Explícito"].map((tag) => (
          <Tag key={tag} size="lg" variant="solid" colorScheme="red">
            {tag}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}
