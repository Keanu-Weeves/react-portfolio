// src/theme.js
// For Chakra UI v2, you import 'extendTheme'
import { extendTheme } from '@chakra-ui/react';

// Create your theme using extendTheme
const theme = extendTheme({
  // You can define your custom colors, fonts, components, etc., here.
  // This structure is compatible with Chakra UI v2.

  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  // Example of how you'd define custom component styles in v2:
  // components: {
  //   Button: {
  //     baseStyle: {
  //       fontWeight: 'bold',
  //     },
  //     variants: {
  //       solid: (props) => ({
  //         bg: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
  //       }),
  //     },
  //   },
  // },
});

export default theme;