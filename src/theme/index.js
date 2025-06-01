import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#0e0e0e",
        color: "#f0f0f0",
      },
    },
  },
  colors: {
    brand: {
      primary: "#8c52ff",
      secondary: "#00d4ff",
      accent: "#39ff14",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
});

export default theme;
