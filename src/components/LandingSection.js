import React, { useState } from "react"; // 1. Import useState
import { Box, Heading, VStack, Text, Image, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myProfilePic from '../images/cody-profile-img.png'; 
import { backgroundImage } from './InteractiveBackground';

const LandingSection = () => {
  // 2. State to track when the user hovers the image
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="transparent" 
      p={8}
      pt={{ base: "120px", md: "80px" }}
    >
      <VStack spacing={8} textAlign="center">
        
        {/* --- The Upgraded Profile Image --- */}
        <Box
          onMouseEnter={() => setIsHovered(true)}   // 3. Trigger glow ON
          onMouseLeave={() => setIsHovered(false)}  // 4. Trigger glow OFF
          borderRadius="full"
          boxSize={{ base: "200px", md: "250px" }} 
          overflow="hidden"
          border="3px solid"
          borderColor="accent.cyan"
          boxShadow="0 0 40px rgba(0, 240, 255, 0.4), inset 0 0 20px rgba(0, 240, 255, 0.3)" 
          transition="all 0.3s ease-in-out"
          cursor="pointer" // Makes the image feel interactive
          _hover={{
            boxShadow: "0 0 60px rgba(0, 240, 255, 0.8)", // Extra bright shadow on hover
            transform: "scale(1.02)",
            backgroundImage: "opacity(1.5)", 
          }}
        >
          <Image 
            src={myProfilePic} 
            alt="Cody" 
            objectFit="cover" 
            w="100%" 
            h="100%" 
          />
        </Box>

        {/* --- The Text Section (Reacts to the Image Hover) --- */}
        <VStack spacing={4}>
          <Text 
            color="accent.cyan" 
            fontFamily="mono" 
            letterSpacing="widest" 
            textTransform="uppercase"
            fontWeight="bold"
            transition="all 0.4s ease" // 5. Smooth transition for the glow
            textShadow={isHovered ? "0 0 10px rgba(0, 240, 255, 0.8)" : "none"} // Conditional glow
          >
            Hello, I am Cody
          </Text>
          
          <Heading 
            as="h1" 
            size={{ base: "2xl", md: "3xl" }} 
            color={isHovered ? "white" : "whiteAlpha.900"} // Brightens slightly
            lineHeight="shorter"
            fontWeight="800"
            transition="all 0.4s ease"
          >
            Engineering Immersive <br />
            <Text 
              as="span" 
              color="accent.cyan"
              transition="all 0.4s ease"
              textShadow={isHovered ? "0 0 25px rgba(0, 240, 255, 0.7)" : "none"} // Massive neon pop!
            >
              Digital Experiences
            </Text>
          </Heading>

          <Text 
            color={isHovered ? "white" : "whiteAlpha.800"} // Turns pure white on hover
            fontSize={{ base: "md", md: "xl" }} 
            maxWidth="550px"
            lineHeight="tall"
            transition="all 0.4s ease"
          >
            A software developer specializing in React. From crafting interactive educational AI tools to building robust, responsive web applications, 
            I turn complex problems into elegant, scalable solutions.
          </Text>
        </VStack>

        <Button 
          variant="solidTech" 
          size="lg" 
          mt={4} 
          px={8}
          py={6}
          borderRadius="full"
          onClick={handleScrollToProjects}
        >
          View My Work
        </Button>
        
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;