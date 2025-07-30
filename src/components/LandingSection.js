import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import '../styles.css';
import myProfilePic from '../images/20250605_141325.jpg';


//Variables
const greeting = "Hello, I am Cody!";
const bio1 = "A frontend developer";
const bio2 = "specialised in "
const highlight = "React"

//Styles
const picStyles = {
  border: "1px solid black",
  height: "100px",
  width: "100px",
  boxShadow: "0px 0px 16px rgba(255, 165, 0, 1)" 
}

const greetStyles = {
  fontSize: "14px",
  fontStyle: "italic"
}

const LandingSection = () => (

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#353445"
  >

  <VStack spacing={4}>
    <Avatar style={picStyles} src={myProfilePic} />
      <Text style={greetStyles}>{greeting}</Text>
      <Heading as="h2" size="2xl" textAlign="center" >
        <Text>{bio1}</Text>
        <Text>
          {bio2}
          <Text as="span" id='highlightStyles'>React</Text>
        </Text>
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
