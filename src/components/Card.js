import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import '../styles.css';



const Card = ({ title, description, imageSrc }) => {
  
  return (
    <VStack 
    spacing="16px" 
    background="a9a9a9"
    borderRadius="8px"
    align="left"
    boxShadow="0px 0px 18px rgba(255, 165, 0, 1)"
    className="card"
    >
      <Image src={imageSrc}
      borderRadius="8px" />
      <Heading 
      as='h2' 
      size='md'
      textAlign="left"
      cursor="pointer" 
      color="lightgrey"
      px="6px"
      className="cardHeading"
      >
        {title}
      </Heading>
      <Text 
      color="grey" 
      fontSize="14px"
      px="6px">
        {description}
      </Text>
      <HStack
        spacing="0">
        <Text 
        color="lightgrey"
        fontSize="12px"
        cursor="pointer"
        p="6px"
        mx="2"
        fontWeight="500"
        >See more</Text>
        <FontAwesomeIcon 
        icon={faArrowRight}
        size="1x" 
        color="lightgrey"
        cursor="pointer"
        />
      </HStack>
    </VStack>
  )
};

export default Card;
