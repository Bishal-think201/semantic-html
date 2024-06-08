import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#545AA7",
    },
    secondary: {
      main: "#007bff",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default lightTheme;
