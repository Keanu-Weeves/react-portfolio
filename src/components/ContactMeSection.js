import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Text
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {

  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values, { resetForm }) => {
      //native Fetch API
      try {
        const response = await fetch("https://formspree.io/f/xyknlvyy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          onOpen('success', "Thanks for reaching out! I will get back to you soon.");
          resetForm();
        } else {
          onOpen('error', "Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        onOpen('error', "Network error. Please check your connection.");
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required("Required"),
      email: Yup.string().email('Invalid email address').required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="transparent"
      py={16}
      spacing={8}
    >
      <VStack w="100%" maxW="800px" p={{ base: 4, md: 8 }} alignItems="center" id="form-container">
        
        <Heading 
          as="h2" 
          id="contactme-section" 
          color="white" 
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={8}
        >
          Let's <Text as="span" color="accent.cyan">Connect</Text>
        </Heading>

        {/* --- GLASSMORPHIC FORM CONTAINER --- */}
        <Box 
          w="100%" 
          bg="rgba(15, 23, 42, 0.4)" // Semi-transparent obsidian
          backdropFilter="blur(12px)" // Frosted glass effect
          border="1px solid"
          borderColor="whiteAlpha.200"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          boxShadow="xl"
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel color="whiteAlpha.900" htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  bg="rgba(0,0,0,0.2)" // Slightly dark inset feel
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  focusBorderColor="accent.cyan" // Glows cyan when typing
                  color="white"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email" color="whiteAlpha.900">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  bg="rgba(0,0,0,0.2)"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  focusBorderColor="accent.cyan"
                  color="white"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.type && formik.touched.type}>
                <FormLabel htmlFor="type" color="whiteAlpha.900">Type of Inquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  bg="rgba(0,0,0,0.2)"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  focusBorderColor="accent.cyan"
                  color="white"
                  sx={{
                    // Targets the dropdown options to ensure they are readable
                    '> option': { background: '#0F172A', color: 'white' },
                  }}
                  {...formik.getFieldProps('type')}
                >
                  <option value="">Select an option</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Employment Inquiry</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment" color="whiteAlpha.900">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={200}
                  bg="rgba(0,0,0,0.2)"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  focusBorderColor="accent.cyan"
                  color="white"
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Using custom tech button*/}
              <Button
                variant="solidTech"
                type="submit"
                width="full"
                size="lg"
                mt={4}
                isLoading={formik.isSubmitting}
              >
                Send Message
              </Button>

            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;