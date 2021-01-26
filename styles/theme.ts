// 1. Import the extendTheme function
import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config = {
  initialColorMode: "dark",
  // useSystemColorMode: true,
};

// example theme object
export const custom = {
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, serif",
    mono: "Montserrat, monospace",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// const config = {
//   initialColorMode: "light",
//   fonts: {
//     body: "Montserrat",
//     heading: "Montserrat",
//     mono: "Menlo, monospace",
//   },
//   colors: {
//     body: "red",
//   },
//   // useSystemColorMode: true,
// };

export const theme = extendTheme({ config });
