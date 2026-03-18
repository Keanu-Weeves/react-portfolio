import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      bg="rgba(15, 23, 42, 0.75)" 
      backdropFilter="blur(12px)" // Matches the header
      borderTop="1px solid"
      borderColor="rgba(0, 240, 255, 0.15)"
      position="relative"
      zIndex={10}
    >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="whiteAlpha.700"
          justifyContent="center"
          alignItems="center"
          maxWidth="1200px"
          height={16}
        >
          <Text fontFamily="mono" fontSize="sm" letterSpacing="widest">
            {/* Dynamically gets the current year */}
            Cody Edwards • © {new Date().getFullYear()}
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;