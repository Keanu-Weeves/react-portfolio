import React from "react";
import {
  Box,
  HStack,
  VStack,
  Button,
  Drawer,              // main Drawer component
  DrawerBody,          // content area
  DrawerCloseButton,   // close button
  DrawerContent,       // drawer panel
  DrawerHeader,        // title inside the drawer
  DrawerOverlay,       // background overlay
  useDisclosure,
  Link,
  Text,
} from "@chakra-ui/react";
import { forwardRef, useRef, useState, useEffect } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "../styles.css"

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: edwards.cody51@yahoo.com",
    label: "Email"
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com/Keanu-Weeves",
    label: "Github"
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "www.linkedin.com/in/cody-edwards-756769202",
    label: "LinkedIn"
  },
  {
    id: 4,
    icon: faMedium,
    url: "https://medium.com",
    label: "Medium"
  },
  {
    id: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    label: "StackOverflow"
  },
]

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (anchor) => () => {
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
      const headerElement = headerRef.current;

      if (!headerElement) {
        return;
      }

      if (currentScrollY > prevScrollY && currentScrollY > 200) {

        setIsVisible(false);
      } else if (currentScrollY < prevScrollY) {

        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <Box
    ref={headerRef}
    position="fixed"
    top={0}
    left={0}
    right={0}
    zIndex={100}
    backgroundColor="#18181b"
    transform={isVisible ? 'translateY(0)' : 'translateY(-200px)'}
    transitionProperty= "transform"
    transitionDuration= ".3s"
    transitionTimingFunction= "ease-in-out"
    >
      <HStack
        maxWidth="1024px"
        margin="0 auto"
        px={12}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <a href="#projects" className="link" onClick={handleClick("projects")}>Projects</a>
        <a href="#contactme" className="link" onClick={handleClick("contactme")}>Contact Me</a>
        <Button ref={btnRef} onClick={onOpen} className="socials-btn">
          Socials
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay /> {/* This is the backdrop */}

          <DrawerContent
          backgroundColor="#18181b">
            <DrawerCloseButton color="orange" _hover={{ transform: 'rotate(360deg)'}}/>
            <DrawerHeader color="white">Socials</DrawerHeader>
            <DrawerBody>
              <VStack spacing={6}>
                {socials.map((social) => (
                  <a
                  key={social.id}
                  href={social.url}
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className='navIcons' color="white" icon={social.icon} size="2x" />
                  </a>
                   ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Box>
  );
};

export default Header;