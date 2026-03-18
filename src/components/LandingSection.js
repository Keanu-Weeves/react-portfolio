import React from "react";
import { Box, Heading, VStack, Text, Image, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myProfilePic from '../images/cody-profile-img.png'; 

const LandingSection = () => {
  // A quick handler to smoothly scroll to the projects section when click the CTA
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
      // transparent so global geometric background shines through
      backgroundColor="transparent" 
      p={8}
      pt={{ base: "120px", md: "80px" }}
          >
      <VStack spacing={8} textAlign="center">
        
        {/* --- The Upgraded Profile Image --- */}
        <Box
          borderRadius="full"
          boxSize={{ base: "200px", md: "250px" }} // Responsive: slightly smaller on mobile
          overflow="hidden"
          border="3px solid"
          borderColor="accent.cyan"
          boxShadow="0 0 40px rgba(0, 240, 255, 0.4),
          inset 0 0 20px rgba(0, 240, 255, 0.3)" // Deep cyan glow matching our theme
          transition="all 0.3s ease-in-out"
          _hover={{
            boxShadow: "0 0 50px rgba(0, 240, 255, 0.6)",
            transform: "scale(1.02)", // Subtle lift on hover
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


        <VStack spacing={4}>
          <Text 
            color="accent.cyan" 
            fontFamily="mono" 
            letterSpacing="widest" 
            textTransform="uppercase"
            fontWeight="bold"
          >
            Hello, I am Cody
          </Text>
          
          <Heading 
            as="h1" 
            size={{ base: "2xl", md: "3xl" }} 
            color="white"
            lineHeight="shorter"
            fontWeight="800"
          >
            Engineering Immersive <br />
            <Text as="span" color="accent.cyan">Digital Experiences</Text>
          </Heading>

          <Text 
            color="whiteAlpha.800" 
            fontSize={{ base: "md", md: "xl" }} 
            maxWidth="550px"
            lineHeight="tall"
          >
            A software developer specializing in React. From crafting interactive educational AI tools to building robust, responsive web applications, 
            I turn complex problems into elegant, scalable solutions.
          </Text>
        </VStack>

        <Button 
          variant="solidTech" // the custom theme variant
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