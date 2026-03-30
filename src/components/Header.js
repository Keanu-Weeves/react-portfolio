import React, { useRef, useState, useEffect } from "react";
import { Box, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { id: 1, icon: faEnvelope, url: "mailto:edwards.cody51@yahoo.com", label: "Email" },
  { id: 2, icon: faGithub, url: "https://github.com/Keanu-Weeves", label: "Github" },
  { id: 3, icon: faLinkedin, url: "https://www.linkedin.com/in/cody-edwards-756769202", label: "LinkedIn" },
];

const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (anchor) => (e) => {
    e.preventDefault(); // Prevent default anchor jump
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY) {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      /* --- OBSIDIAN GLASSMORPHISM --- */
      bg="rgba(15, 23, 42, 0.75)" // Semi-transparent obsidian
      backdropFilter="blur(12px)" // This creates the frosted glass effect over your background
      borderBottom="1px solid"
      borderColor="rgba(0, 240, 255, 0.15)" // Subtle icy cyan underline
      /* ------------------------------ */
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.4s ease-in-out, background-color 0.3s ease"
    >
      <HStack
        maxWidth="1200px"
        margin="0 auto"
        px={8}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left Side: Navigation Links */}
        <HStack spacing={8}>
          <ChakraLink
            href="#projects"
            onClick={handleClick("projects")}
            color="white"
            fontWeight="bold"
            fontFamily="mono" // Gives it a tech/coding vibe
            textTransform="uppercase"
            letterSpacing="widest"
            fontSize="sm"
            transition="all 0.3s"
            _hover={{
              color: "accent.cyan",
              textShadow: "0 0 10px rgba(0, 240, 255, 0.6)", // Cyan glow
              textDecoration: "none",
            }}
          >
            Projects
          </ChakraLink>
          <ChakraLink
            href="#contactme"
            onClick={handleClick("contactme")}
            color="white"
            fontWeight="bold"
            fontFamily="mono"
            textTransform="uppercase"
            letterSpacing="widest"
            fontSize="sm"
            transition="all 0.3s"
            _hover={{
              color: "accent.cyan",
              textShadow: "0 0 10px rgba(0, 240, 255, 0.6)",
              textDecoration: "none",
            }}
          >
            Contact
          </ChakraLink>
        </HStack>

        {/* Right Side: Social Icons */}
        <HStack spacing={6}>
          {socials.map((social) => (
            <ChakraLink
              key={social.id}
              href={social.url}
              isExternal // Opens in new tab
              color="whiteAlpha.700" // Muted white
              transition="all 0.3s"
              _hover={{
                color: "accent.cyan",
                transform: "translateY(-3px)", // Physical "lift" effect
                filter: "drop-shadow(0px 0px 8px rgba(0, 240, 255, 0.8))", // Icon glow
              }}
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </ChakraLink>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;