import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Heading,
  VStack,
  // --- CORRECTED IMPORTS FOR CHAKRA UI V2 FORMS ---
  FormControl,       // Replaces Field.Root
  FormLabel,         // Replaces Field.Label
  FormErrorMessage,  // Replaces FieldErrorText
  Input,
  Select,            // Keep Select if you're using the Chakra UI Select
  Textarea,
  // --- END CORRECTED IMPORTS ---
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import '../styles.css'

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log("DEBUG: Formik onSubmit fired with values:", values);
      await submit("/", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required("Required"),
      email: Yup.string().email('Invalid email address').required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response, onOpen, formik.resetForm]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#353445"
      py={16}
      spacing={8}
    >
      <VStack w="100vw" p={{ base: 4, md: 0}} alignItems="flex-start">
        <Heading color="white" as="h1" id="contactme-section" textAlign={{ base: 'center', md: 'left' }} className="contactHeading">
          Contact me
        </Heading>
        <Box color="white" rounded="md" w="100%">
          <form className="form" onSubmit={formik.handleSubmit}>
            <VStack spacing={8}>
              {/* Name Field */}
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel color="white" htmlFor="firstName">Name</FormLabel>
                <Input
                  color="orange"
                  className="firstName"
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email" color="white">Email Address</FormLabel>
                <Input
                  color="orange"
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of Enquiry Field */}
              <FormControl
                isInvalid={formik.errors.type && formik.touched.type}
              >
                <FormLabel htmlFor="type" color="white">Type of Enquiry</FormLabel>
                <Select
                  color="orange"
                  className="options"
                  id="type"
                  name="type"
                  {...formik.getFieldProps('type')}
                >
                  <option value="">Select an option</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Employment Enquiry
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              {/* Your Message Field */}
              <FormControl
                isInvalid={formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment" color="white">Your message</FormLabel>
                <Textarea
                  color="orange"
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                backgroundColor='white'
                className="submitButton"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
