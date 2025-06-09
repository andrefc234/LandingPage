
import Navbar from "../components/Navbar";
import { Box } from '@chakra-ui/react';

import Head from 'next/head';
import Hero from '../components/Hero';
import LatestRelease from '../components/LatestRelease';
import MusicPlayer from '../components/MusicPlayer';

import Merch from '../components/Merch';
import Gallery from '../components/Gallery';
import SocialMedia from '../components/SocialMedia';
import YouTubeCarousel from '../components/YouTubeCarousel'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rafku | Artista Urbano y Rapero</title>
        <meta name="description" content="Ritmo callejero, letras contundentes. Sigue a Rafku." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <Navbar />
      <Hero />
      <Box my={12}>
      <LatestRelease />
    </Box>
      <MusicPlayer />
   <YouTubeCarousel/>
    
    
       <Box my={12}>
      <SocialMedia />
    </Box>
      <Footer />
    </>
  );
}
