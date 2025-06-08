import { Box, Heading, Image, SimpleGrid, Text, Button, Stack } from '@chakra-ui/react';

const merchItems = [
  { name: 'Hoodie Rafku', img: '/hoodie.jpg', price: '$50', link: '#' },
  { name: 'Gorra Rafku', img: '/cap.jpg', price: '$25', link: '#' },
];

export default function Merch() {
  return (
    <Box py={16} px={6}>
      <Heading as="h2" textAlign="center" mb={8} color="teal.400">
        🧢 Merch Oficial
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} maxW="4xl" mx="auto">
        {merchItems.map((m) => (
          <Box key={m.name} rounded="xl" overflow="hidden" shadow="md" bg="white">
            <Image src={m.img} alt={m.name} objectFit="cover" w="100%" h="300px" />
            <Box p={6}>
              <Heading as="h3" fontSize="xl" mb={2}>{m.name}</Heading>
              <Text mb={4}>{m.price}</Text>
              <Button as="a" href={m.link} colorScheme="teal" w="full">
                Comprar
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
