import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <MusicPlayer />
      <Footer />
    </Box>
  );
}
