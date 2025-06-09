
// components/YouTubeCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box, useColorModeValue, Icon } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';
import { FaPlayCircle } from 'react-icons/fa';
const videos = [
  'https://www.youtube.com/embed/Yx7swpWXZvE?si=W51g3tUd8-dX-ER8',
  'https://www.youtube.com/embed/SDqyNN4RIWU?si=qjGUTBvWhZ7iwQIc',
  'https://www.youtube.com/embed/fCPRx55DbpE?si=CYYVExQ6cUWuCA_Z',
];

const YouTubeCarousel = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const settings = { /* como arriba */ };

  return (
    <Box maxW="900px" mx="auto" py={8} bg={bg} rounded="3xl" shadow="2xl">
      <Slider {...settings}>
        {videos.map((url, idx) => (
          <Box key={idx} position="relative" pt="56.25%">
            <ReactPlayer
              url={url}
              controls
              width="100%"
              height="100%"
              light
              playIcon={<Icon as={FaPlayCircle} w={12} h={12} color="red.500" />}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default YouTubeCarousel;
