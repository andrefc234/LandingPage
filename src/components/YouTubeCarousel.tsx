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
} from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';
import { FaPlayCircle } from 'react-icons/fa';

const videoIds = ['Yx7swpWXZvE', 'SDqyNN4RIWU', 'fCPRx55DbpE'];

export default function YouTubeCarousel() {
  const bg = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    accessibility: true,
    autoplay: false,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <Box
      as="section"
      maxW={{ base: "90%", md: "900px" }}
      mx="auto"
      py={{ base: 8, md: 12 }}
      px={{ base: 2, md: 4 }}
      bg={bg}
      rounded="3xl"
      shadow="2xl"
      role="region"
      aria-label="Carrusel de videos de YouTube de RAFKU"
    >
      <VStack spacing={6} textAlign="center" mb={8}>
        <Heading
          as="h2"
          size={{ base: "md", md: "lg" }}
          color="teal.400"
          fontWeight="extrabold"
        >
          🎥 Mira los últimos videoclips de RAFKU
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color={textColor} maxW="lg" mx="auto">
          Descubre el sonido más fresco y contundente del momento. Estos videos son parte de su nueva producción.
        </Text>
      </VStack>

      <Slider {...settings}>
        {videoIds.map((id) => (
          <VStack key={id} spacing={4} p={4}>
            <Box
              w="full"
              position="relative"
              pt="56.25%" // 16:9 aspect ratio
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                light={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                playIcon={
                  <Icon
                    as={FaPlayCircle}
                    w={16}
                    h={16}
                    color="red.500"
                    aria-label="Reproducir video"
                    role="button"
                    tabIndex={0}
                  />
                }
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
