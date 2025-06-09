// components/YouTubeCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box, VStack, useColorModeValue, Icon } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';
import { FaPlayCircle } from 'react-icons/fa';

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
    <Box maxW="900px" mx="auto" py={12} bg={bg} rounded="3xl" shadow="2xl">
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
