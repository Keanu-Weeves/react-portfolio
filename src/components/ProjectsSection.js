import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Coming Soon",
    description:"",          
    getImageSrc: () => require("../images/coming-soon.jpg"),
  },
  {
    title: "Coming Soon",
    description:"",
    getImageSrc: () => require("../images/coming-soon.jpg"),
  },
  {
    title: "Coming Soon",
    description: "",
    getImageSrc: () => require("../images/coming-soon.jpg"),
  },
  {
    title: "Coming Soon",
    description: "",
    getImageSrc: () => require("../images/coming-soon.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#353445"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      
    >
      <Box width="100%" display="flex" justifyContent={{ base: 'center', md: 'left' }} alignItems="center">
        <Heading  as="h1" id="projects-section"
        color="lightgrey" textAlign={{ base: 'center', md: 'left' }}>
          Featured Projects
        </Heading>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
        gridGap={8}
        mx="1em"
      >
        {projects.map((project) => (
          <Card
            className="card"
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
