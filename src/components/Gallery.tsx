import { Box, SimpleGrid, Image } from '@chakra-ui/react';

const photos = ['/gal1.jpg', '/gal2.jpg', '/gal3.jpg', '/gal4.jpg'];

export default function Gallery() {
  return (
    <Box py={16} px={6} bg="gray.50">
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} maxW="5xl" mx="auto">
        {photos.map((src, i) => (
          <Image key={i} src={src} alt={`Galería Rafku ${i + 1}`} borderRadius="md" objectFit="cover" />
        ))}
      </SimpleGrid>
    </Box>
  );
}
