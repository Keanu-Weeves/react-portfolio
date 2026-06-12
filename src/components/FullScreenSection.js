import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      color={isDarkBackground ? "white" : "black"}
      width="100%" // prevent scrollbar layout shifts
      overflowX="hidden"
      {...boxProps} //ensures backgroundColor="transparent" applies to the main container
    >

      <VStack 
        maxWidth={{ base: "100%", lg: "1200px" }} 
        minHeight="100vh" 
        w="100%"
        justifyContent="center" // Keeps content vertically centered by default
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;