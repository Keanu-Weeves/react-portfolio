import { Heading, HStack, Image, Text, VStack, Button, Box, Badge, Flex } from "@chakra-ui/react"; // <-- Added Flex here!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"; 
import React from "react";

const Card = ({ title, description, imageSrc, videoSrc, url, tags }) => {
  
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <VStack
      align="flex-start"
      bg="rgba(15, 23, 42, 0.6)" 
      backdropFilter="blur(4px)" 
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.4s ease-in-out"
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "accent.cyan",
        boxShadow: "0 12px 30px -10px rgba(0, 240, 255, 0.5)",
      }}
    >
      {/* --- THE FIX: Replaced Box with Flex here --- */}
      <Flex 
        w="100%" 
        h="250px" 
        justifyContent="center" 
        alignItems="center"
        position="relative" 
        overflow="hidden"
        bg={videoSrc ? "white" : "rgba(0, 0, 0, 0.4)"} // This paints the letterboxing!
      >
        {videoSrc ? (
          <Box 
            as="video"
            src={videoSrc}
            autoPlay 
            loop 
            muted 
            playsInline 
            w="100%"
            h="100%"
            objectFit="contain" 
            poster={imageSrc} 
          />
        ) : imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={title} 
            w="100%" 
            h="100%" 
            objectFit="contain" 
            transition="transform 0.4s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          />
        ) : null}
      </Flex>
      {/* ------------------------------------------- */}

      <VStack align="flex-start" p={6} spacing={4} w="100%">
        
        <HStack spacing={2} flexWrap="wrap">
          {tags && tags.map((tag, index) => (
            <Badge 
              key={index}
              px={2} py={1} 
              bg="rgba(0, 240, 255, 0.1)" 
              color="accent.cyan"
              borderRadius="md"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {tag}
            </Badge>
          ))}
        </HStack>

        <Heading as="h3" size="md" color="white">
          {title}
        </Heading>
        
        <Text color="whiteAlpha.800" fontSize="sm" lineHeight="tall">
          {description}
        </Text>
        
        <Box pt={4} w="100%">
          {url && (
             <Button 
               variant="glow"
               size="sm" 
               onClick={handleClick}
               rightIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
             >
               View Live Project
             </Button>
          )}
        </Box>
      </VStack>
    </VStack>
  );
};

export default Card;