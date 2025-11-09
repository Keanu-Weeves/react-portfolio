import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant app",
    description:"Featuring a rotating carousel and a reserve table form with a pop-up modal. View live now and follow for updates!",
    url: 'https://littlelemonreactapp.netlify.app/',
    getImageSrc: () => require("../images/LittleLemonThumb.png"),
  },
  {
    title: "brAIn-e  (AI Educational Tutor) ",
    description:"Meet brAIn-e! A work in progress AI - private personal project so details are under wraps, but follow along!",
    url: 'https://aiedututor.netlify.app/',
    getImageSrc: () => require("../images/brAIn-e-logo.png"),
  },
  {
    title: "Coming Soon",
    description: "",
    url: null,
    getImageSrc: () => require("../images/coming-soon.jpg"),
  },
  {
    title: "Coming Soon",
    description: "",
    url: null,
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
        {projects.map((project, index) => (
          <Card
            className="card"
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
