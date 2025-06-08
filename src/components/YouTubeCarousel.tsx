// components/YouTubeCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box, useColorModeValue } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';

const videos = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
  'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
];

const YouTubeCarousel = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box maxW="800px" mx="auto" py={10} bg={bg} rounded="2xl" shadow="xl">
      <Slider {...settings}>
        {videos.map((url, idx) => (
          <Box key={idx} p={4}>
            <Box position="relative" paddingTop="56.25%" rounded="xl" overflow="hidden">
              <ReactPlayer
                url={url}
                controls
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default YouTubeCarousel;
