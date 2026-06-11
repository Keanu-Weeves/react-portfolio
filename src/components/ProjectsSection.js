import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";


const projects = [
  {
    title: "Little Lemon Restaurant App",
    description: "A frontend application featuring a dynamic rotating carousel and a robust table reservation system with modal validations.",
    url: 'https://littlelemonreactapp.netlify.app/',
    getVideoSrc: () => require("../images/carousel-menu.mp4"),
    tags: ["React", "UX/UI", "State Management"] // Added tech tags
  },
  {
    title: "brAIn-e (AI Educational Tutor)",
    description: "An interactive educational platform designed for children. Currently in active development focusing on custom AI logic and seamless user flows.",
    url: 'https://brain-e.netlify.app/',
    getVideoSrc: () => require("../images/braine-animated.mp4"),
    tags: ["React", "AI Integration", "EdTech"]
  },
  {
    title: "Student Management System",
    description: "A comprehensive GUI application built with JavaFX to manage student records, including CRUD operations, OOP, and relational data mapping.",
    getVideoSrc: () => require("../images/java-recording.mp4"),
    tags: ["Java", "JavaFX", "OOP", "Relational Data"]
  },
  {
    title: "Dynamic Weather Dashboard",
    description: "A real-time weather tracking application with a modern UI and comprehensive data visualization.",
    getVideoSrc: () => require("../images/weather-dashboard.mp4"),
    tags: ["JavaFX","Java", "UI/UX", "API Integration", "Data Visualization"]
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="transparent" // global background shine through
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={8}
    >
      {/* maxW keeps the grid from stretching too far on giant monitors */}
      <Box width="100%" maxW="1200px" mx="auto" pt={10}> 
        <Heading 
          as="h2" 
          id="projects-section"
          color="white" 
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={10}
          textAlign={{ base: 'center', md: 'left' }}
        >
          Featured <Text as="span" color="accent.cyan">Work</Text>
        </Heading>

        {/* SimpleGrid cleaner for responsive layouts than manual grid templates */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc ? project.getImageSrc() : null}
              videoSrc={project.getVideoSrc ? project.getVideoSrc() : null}
              url={project.url}
              tags={project.tags}
            />
          ))}
        </SimpleGrid>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;