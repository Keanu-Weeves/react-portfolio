import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import '../styles.css';
import myProfilePic from '../images/20250605_141325.jpg';


//Variables
const greeting = "Hello, I am Cody!";
const bio1 = "A frontend developer";
const bio2 = "specialised in "
const highlight = 'React'

//Styles
const picStyles = {
  border: "1px solid black",
  height: "100px",
  width: "100px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 1)" 
}

const greetStyles = {
  fontSize: "14px",
  fontStyle: "italic"
}

const textStyles = {
  textAlign: "center"
}


const LandingSection = () => (

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#353445"
  >

  <VStack>
    <Avatar style={picStyles} src={myProfilePic} />
      <p style={greetStyles}>{greeting}</p>
      <br></br>
    <Heading >
      <h3 style={textStyles}>{bio1}</h3>
      <h3 style={textStyles}>{bio2}</h3>
      <h3 className='highlightStyles'>{highlight}</h3>
      
    </Heading>
  </VStack>
   
    

  </FullScreenSection>
);

export default LandingSection;
