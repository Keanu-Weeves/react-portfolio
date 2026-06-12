

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="#0a101d" 
      zIndex="1"
      overflow="hidden"
    >
      {/* 1. The trailing ambient glow (Physics-based) */}
      <motion.div
        animate={{
          x: mousePosition.x - 400, 
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5, 
        }}
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(15, 23, 42, 0) 60%)",
          borderRadius: "50%",
          position: "absolute",
        }}
      />

      {/* 2. The static electrified grid with a dynamic cursor mask */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        // Pure cyan grid lines
        backgroundImage="linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)"
        backgroundSize="40px 40px"
        style={{
          // This creates a window that only reveals the grid right where the mouse is
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      />
    </Box>
  );
};

export default InteractiveBackground;