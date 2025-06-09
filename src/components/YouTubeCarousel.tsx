// components/YouTubeCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  VStack,
  useColorModeValue,
  Icon,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';
import { FaPlayCircle } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const videoIds = ['Yx7swpWXZvE', 'SDqyNN4RIWU', 'fCPRx55DbpE'];

export default function YouTubeCarousel() {
  const bg = useColorModeValue('gray.100', 'gray.800');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
  };

  return (
    <Box maxW="900px" mx="auto" py={12} px={4} bg={bg} rounded="3xl" shadow="2xl">
      <VStack spacing={6} textAlign="center" mb={8}>
        <Heading size="lg" color="teal.400">
          🎥 Mira los últimos videoclips de RAFKU
        </Heading>
        <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
          Descubre el sonido más fresco y contundente del momento. Estos videos son parte de su nueva producción.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          <Button
            colorScheme="teal"
            size="md"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => window.location.href = '/music'}
          >
            Ver más música
          </Button>
          <Button
            variant="outline"
            colorScheme="teal"
            size="md"
            onClick={() => window.location.href = '/contact'}
          >
            Contactar para colaboraciones
          </Button>
        </Stack>
      </VStack>

      <Slider {...settings}>
        {videoIds.map((id, idx) => (
          <VStack key={idx} spacing={4} p={6}>
            <Box
              w="full"
              position="relative"
              pt="56.25%"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                light={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                playIcon={<Icon as={FaPlayCircle} w={16} h={16} color="red.500" />}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </Box>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
}
