// components/SocialLinks.tsx
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://insta.oia.bio/ku',
    icon: FaInstagram,
    description: 'Mira el estilo y el día a día de Rafku en su Instagram oficial.🔥',
    color: '#E1306C', // Instagram pinkish
  },
  {
    label: 'YouTube',
    url: 'https://YT.oia.bio/ku',
    icon: FaYoutube,
    description: 'Escucha sus últimos lanzamientos, videoclips y freestyle sessions. 🎤',
    color: '#FF0000', // YouTube red
  },
];

const SocialLinks = () => {
  const bg = useColorModeValue('gray.900', 'gray.900'); // oscuro para más contraste y neón
  const cardBg = useColorModeValue('gray.800', 'gray.700');
  const textColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900');
  const descColor = useColorModeValue('gray.300', 'gray.400');

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const iconSize = useBreakpointValue({ base: 12, md: 16 });

  return (
    <Box maxW="900px" mx="auto" mt={12} px={4} py={10} bg={bg} rounded="3xl" shadow="dark-lg">
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl' }}
        mb={8}
        textAlign="center"
        color="teal.300"
        textShadow="0 0 10px teal"
      >
        🔗 Conecta con Rafku
      </Heading>

      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        mb={10}
        textAlign="center"
        color={textColor}
        maxW="650px"
        mx="auto"
        fontWeight="medium"
        textShadow="0 0 4px rgba(0,0,0,0.5)"
      >
        Sumérgete en el mundo de <strong>Rafku</strong>, artista urbano que fusiona ritmos,
        letras y calle en cada verso. Síguelo y forma parte del movimiento. 🚀
      </Text>

      <Flex direction={flexDirection} gap={8} justify="center" flexWrap="wrap">
        {socialLinks.map(({ label, url, icon, description, color }) => (
          <Link
            key={label}
            href={url}
            isExternal
            aria-label={`Visitar ${label} de Rafku`}
            role="group"
            w={{ base: 'full', md: '45%' }}
            bg={cardBg}
            rounded="2xl"
            p={6}
            shadow="lg"
            position="relative"
            overflow="hidden"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: `0 0 20px 5px ${color}`,
              bg: `linear-gradient(135deg, ${color}33, ${color}99)`,
              color: color,
            }}
          >
            <Flex align="center" gap={6}>
              <Box
                p={2}
                rounded="full"
                bg={`${color}22`}
                _groupHover={{ bg: color }}
                transition="background-color 0.3s ease"
              >
                <Icon
                  as={icon}
                  boxSize={iconSize}
                  color={color}
                  _groupHover={{ color: 'white' }}
                  transition="color 0.3s ease"
                />
              </Box>

              <Box>
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  mb={1}
                  letterSpacing="wide"
                  _groupHover={{ color: 'white' }}
                  transition="color 0.3s ease"
                >
                  {label}
                </Text>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  color={descColor}
                  _groupHover={{ color: 'whiteAlpha.800' }}
                  transition="color 0.3s ease"
                  lineHeight="short"
                >
                  {description}
                </Text>
              </Box>
            </Flex>

            {/* Neon Glow effect */}
            <Box
              position="absolute"
              top={-4}
              left={-4}
              w="calc(100% + 32px)"
              h="calc(100% + 32px)"
              rounded="3xl"
              filter="blur(24px)"
              bg={color}
              opacity={0.15}
              pointerEvents="none"
              transition="opacity 0.3s ease"
              _groupHover={{ opacity: 0.4 }}
              zIndex={-1}
            />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SocialLinks;
