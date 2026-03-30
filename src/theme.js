import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Force dark mode to align with the Obsidian background
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  
  colors: {
    // The core dark aesthetic for cards, panels, and overlays
    obsidian: {
      900: '#0F172A', // Deepest background wash
      800: '#1E293B', // Glassmorphic card backgrounds
      700: '#334155', // Lighter borders and subtle dividers
    },
    // The light trail colors pulled directly from headshot
    accent: {
      cyan: '#00F0FF',      // High-energy glowing cyan
      cyanHover: '#5CFAFF', // Lighter cyan for active hover states
      blue: '#0057FF',      // Deep electric blue for secondary elements
    },
  },
  
  fonts: {
    // Kept current fonts, but added a 'mono' option for any code snippets or technical details in the future
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
    mono: `'Fira Code', 'Courier New', monospace`, 
  },
  
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        //  for secondary buttons (like "GitHub Repo")
        glow: {
          bg: 'transparent',
          color: 'accent.cyan',
          border: '1px solid',
          borderColor: 'accent.cyan',
          boxShadow: '0 0 10px rgba(0, 240, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          _hover: {
            bg: 'rgba(0, 240, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
            transform: 'translateY(-2px)', // Gives a nice physical "lift"
          },
        },
        //for primary calls to action (like "View Live Project")
        solidTech: {
          bg: 'accent.cyan',
          color: 'obsidian.900', // Dark text on bright button for contrast
          transition: 'all 0.3s ease-in-out',
          _hover: {
            bg: 'accent.cyanHover',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
          }
        }
      },
    },
  },
});

export default theme;