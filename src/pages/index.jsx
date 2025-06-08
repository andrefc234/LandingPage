
import Navbar from "../components/Navbar";

import Head from 'next/head';
import Hero from '@/components/Hero';
import LatestRelease from '@/components/LatestRelease';
import MusicPlayer from '@/components/MusicPlayer';
import TourDates from '@/components/TourDates';
import Merch from '@/components/Merch';
import Gallery from '@/components/Gallery';
import SocialLinks from '@/components/SocialLinks';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

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
      <LatestRelease />
      <MusicPlayer />
      <TourDates />
      <Merch />
      <Gallery />
      <SocialLinks />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
