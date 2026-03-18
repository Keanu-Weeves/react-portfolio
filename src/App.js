import { ChakraProvider, Box } from "@chakra-ui/react"; 
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import theme from './theme';
import './styles.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Box 
          bgImage="url('/geometric-tech-bg.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgAttachment="fixed" 
          position="relative"
          minH="100vh"
          _before={{
            // adds the dark obsidian wash over the background
            content: '""',
            position: "absolute",
            top: 0, right: 0, bottom: 0, left: 0,
            bg: "rgba(15, 23, 42, 0.4)", 
            zIndex: 0,
          }}
        >
          <Box as="main" position="relative" zIndex={1}>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </Box>
        </Box>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;