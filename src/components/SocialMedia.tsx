// components/SocialLinks.tsx
import { Box, Flex, Heading, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://insta.oia.bio/ku',
    icon: FaInstagram,
    description: 'Mira el estilo y el día a día de Rafku en su Instagram oficial.🔥',
  },
  {
    label: 'YouTube',
    url: 'https://YT.oia.bio/ku',
    icon: FaYoutube,
    description: 'Escucha sus últimos lanzamientos, videoclips y freestyle sessions. 🎤',
  },
];

const SocialLinks = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const hoverBg = useColorModeValue('gray.100', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box maxW="700px" mx="auto" mt={12} px={6} py={8} bg={bg} rounded="2xl" shadow="xl">
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '3xl' }}
        mb={6}
        textAlign="center"
        color="teal.500"
      >
        🔗 Conecta con Rafku
      </Heading>

      <Text fontSize="md" mb={8} textAlign="center" color={textColor}>
        Sumérgete en el mundo de <strong>Rafku</strong>, artista urbano que fusiona ritmos,
        letras y calle en cada verso. Síguelo y forma parte del movimiento. 🚀
      </Text>

      <Flex direction="column" gap={6}>
        {socialLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            isExternal
            aria-label={`Visitar ${link.label} de Rafku`}
            _hover={{ textDecoration: 'none', bg: hoverBg }}
            p={5}
            rounded="xl"
            bg={cardBg}
            shadow="md"
            transition="all 0.2s ease"
          >
            <Flex align="center">
              <Icon as={link.icon} boxSize={8} color="teal.400" mr={4} />
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {link.label}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {link.description}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SocialLinks;
