// components/YouTubeCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Text, VStack, useColorModeValue, Icon } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';
import { FaPlayCircle } from 'react-icons/fa';
import { useYouTubeMetadata } from '../hooks/useYouTubeMetadata';

const videoIds = ['Yx7swpWXZvE', 'SDqyNN4RIWU', 'fCPRx55DbpE'];

export default function YouTubeCarousel() {
  const meta = useYouTubeMetadata(videoIds);
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
    <Box maxW="900px" mx="auto" py={12} bg={bg} rounded="3xl" shadow="2xl">
      <Slider {...settings}>
        {meta.map((v) => (
          <VStack key={v.id} spacing={4} p={6}>
            <Box w="full" position="relative" pt="56.25%" borderRadius="lg" overflow="hidden">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${v.id}`}
                controls
                light={v.thumbnail}
                playIcon={<Icon as={FaPlayCircle} w={16} h={16} color="red.500" />}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </Box>
            <Text fontSize="lg" fontWeight="bold" textAlign="center" color="white">
              {v.title}
            </Text>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
}
