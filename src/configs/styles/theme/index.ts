import { extendTheme } from "@chakra-ui/react";

import { config, breakpoints } from "./config";
import { Badge } from "src/configs/styles/components/Badge";
import { FormError } from "src/configs/styles/components/Form";
import { Checkbox } from "src/configs/styles/components/Checkbox";

import 'react-datepicker/dist/react-datepicker.css';

export const theme = extendTheme({
  global: {
    html: {
      fontSize: "14px",
    },
  },
  fonts: {
    heading: "Gotham-Book, GretaArabic-Light, OpenSans-Regular, system-ui, Arial, Helvetica, sans-serif",
    body: "Gotham-Book, GretaArabic-Light, OpenSans-Regular, system-ui, Arial, Helvetica, sans-serif",
  },
  components: {
    Badge,
    FormError,
    Checkbox
  },
  breakpoints,
  colors: {
    grey: {
      main: "#9DA3A7",
      primary: "#8E8E93",
      secondary: "#F5F5F7",
      default: "#F5F6F7",
      light: "#E8EAEB",
      200: "#E2E8F0",
      400: "#A0AEC0",
      800: "#1A202C",
    },
    primary: {
      main: "#085B53",
      secondary: "#00927C",
      100: "#E9FFDB",
    },
    blue: {
      main: '#26A9E0',
      opacity: '#26A9E01A',
      400: '#4299E1',
    },
    dark: {
      main: "#000000",
      secondary: "#222222",
      100: "#333333",
      200: "#333333",
      300: "#333333",
      400: "#333333",
      500: "#333333",
      600: "#333333",
      700: "#333333",
      800: "#333333",
    },
    darkAlpha: {
      300: "rgba(0, 0, 0, 0.16)",
      600: "rgba(0, 0, 0, 0.48)",
      800: "rgba(0, 0, 0, 0.80)",
    },
    shadows: {
      blue: "0 4px 6px -1px #26A9E080, 0 2px 4px -1px #26A9E080",
    },
  },
  radii: {
    sm: '4px',
    md: '16px',
  },
  config,
});
