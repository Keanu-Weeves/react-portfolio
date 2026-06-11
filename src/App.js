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
import InteractiveBackground from "./components/InteractiveBackground";
import { motion } from "framer-motion";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <InteractiveBackground />
        <Box 
          bg="transparent"
          position="relative"
          minH="100vh"
        >
          <Box as="main" position="relative" zIndex={2} bg="transparent">
            <Header />
            <LandingSection />
            <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ProjectsSection />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ContactMeSection />
            </motion.div>
            <Footer />
            <Alert />
          </Box>
        </Box>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;