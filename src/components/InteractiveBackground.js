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
      bg="#0a101d" // deep Obsidian base
      zIndex="1"
      overflow="hidden"
    >
      <motion.div
        animate={{
          x: mousePosition.x - 400, // Offsets by half the width/height to center the glow
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5, // Creates a smooth, slightly delayed physics trailing effect
        }}
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, rgba(0, 240, 255, 0.05) 30%, rgba(15, 23, 42, 0) 60%)",
          borderRadius: "50%",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default InteractiveBackground;