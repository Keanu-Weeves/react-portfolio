import { Heading, HStack, Image, Text, VStack, Button, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import '../styles.css';





const Card = ({ title, description, imageSrc, url }) => {

  const redirectButton = () => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
}

  return (
    <VStack
    spacing="16px"
    background="#575252ff"
    borderRadius="16px"
    align="left"
    mx="1.5em"
    _hover={{ boxShadow: "0px 0px 18px rgba(255, 165, 0, 1)" }}
    className="card"
    >
      <Image src={imageSrc} borderRadius="16px" borderBottomRadius="0" borderBottom="1px double white" />
      <Heading as='h2' size='md' textAlign="left"
      color="white"
      px="6px"
      mx="6px"
      className="cardHeading"
      onClick={redirectButton}
      >
        {title}
      </Heading>
      <Text color="white" fontSize="14px" px="6px" mx='6px'>
        {description}
      </Text>
      <HStack
        spacing="0">
        <Text
        color="white"
        fontSize="12px"
        cursor="pointer"
        p="6px"
        mx="6px"
        fontWeight="bold"
        onClick={redirectButton}
        >See more</Text>
        <FontAwesomeIcon
        icon={faArrowRight}
        size="1x"
        color="white"
        cursor="pointer"
        />
        {url && (
          <Box width="100%" display="flex">
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto' }}>
              <Button colorScheme="green" size="md" m='1em'>View Live Project</Button>
            </a>
          </Box>
        )}
      </HStack>
    </VStack>
  )
};

export default Card;
