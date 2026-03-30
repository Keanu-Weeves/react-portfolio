import { 
  Heading, HStack, Image, Text, VStack, Button, Box, Badge, Flex,
  // 1. Import the Modal components and hook from Chakra
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure 
} from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"; 
import React from "react";

const Card = ({ title, description, imageSrc, videoSrc, url, tags }) => {
  // 2. Initialize the Chakra hook to control the Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
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
        <Flex 
          w="100%" 
          h="250px" 
          justifyContent="center" 
          alignItems="center"
          position="relative" 
          overflow="hidden"
          bg="transparent" 
          cursor="pointer" // 3. Make it obvious it's clickable
          onClick={onOpen} // 4. Open the modal when the media is clicked
          role="group"     // Allows us to trigger child hover states
        >
          {/* Subtle overlay text on hover to tell the user they can expand it */}
          <Flex
            position="absolute"
            top="0" left="0" right="0" bottom="0"
            bg="blackAlpha.600"
            zIndex="2"
            opacity="0"
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontWeight="bold" letterSpacing="widest" textTransform="uppercase">
              Click to Expand
            </Text>
          </Flex>

          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
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

        {/* ... Rest of your existing Card content (Tags, Title, Description, Button) ... */}
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
          <Heading as="h3" size="md" color="white">{title}</Heading>
          <Text color="whiteAlpha.800" fontSize="sm" lineHeight="tall">{description}</Text>
          <Box pt={4} w="100%">
            {url && (
               <Button 
                 variant="glow" size="sm" onClick={handleClick}
                 rightIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
               >
                 View Live Project
               </Button>
            )}
          </Box>
        </VStack>
      </VStack>

      {/* 5. The Actual Modal Component (Hidden until 'isOpen' is true) */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
        <ModalContent bg="transparent" boxShadow="none" overflow="hidden">
          <ModalCloseButton color="accent.cyan" zIndex="3" size="lg" />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay 
                loop 
                controls // Give them play/pause controls in the expanded view!
                style={{ width: "100%", maxHeight: "80vh", borderRadius: "12px" }}
              />
            ) : imageSrc ? (
              <Image 
                src={imageSrc} 
                alt={title} 
                w="100%" 
                maxHeight="80vh" 
                objectFit="contain" 
                borderRadius="12px"
              />
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;