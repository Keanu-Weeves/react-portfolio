// src/components/Alert.js
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton, // Ensure this is imported for the close button
  Button,
  Text, // Needed for displaying the message body
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import { useRef } from 'react';

const Alert = () => { // <--- Remove the props here, the component will rely on context only
  const cancelRef = useRef();

  // Get all necessary values directly from the alert context
  const {
    isOpen,  // This is the boolean for whether the alert is open
    type,    // This is the string 'success' or 'error'
    message, // This is the actual message string (e.g., "Thanks for...")
    onClose  // This is the function to close the alert
  } = useAlertContext();

  // If the alert is not open, don't render anything
  if (!isOpen) return null;

  // Determine if it's a success or error for dynamic styling and text
  const isSuccess = type === 'success'; // Correctly uses the 'type' string from context

  return (
    <AlertDialog
      isOpen={isOpen}          // Use the isOpen from context
      leastDestructiveRef={cancelRef}
      onClose={onClose}        // Use the onClose from context
      isCentered              // Optional: Centers the dialog on the screen
    >
      <AlertDialogOverlay /> {/* This creates the dimming backdrop */}

      <AlertDialogContent
        maxW="md" // Set a maximum width for better readability
        p={6}
        textAlign="center"
        borderRadius="md"
        // Dynamic background and text color based on the alert type
        bg={isSuccess ? 'green.100' : 'red.100'} // Chakra's color palette
        color={isSuccess ? 'green.800' : 'red.800'}
      >
        <AlertDialogCloseButton /> {/* Provides a small 'X' button to close */}

        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {isSuccess ? "All good!" : "Oops!"} {/* CORRECTED: Uses isSuccess directly */}
        </AlertDialogHeader>

        <AlertDialogBody>
          <Text>{message}</Text> {/* CORRECTED: Directly uses the 'message' string */}
        </AlertDialogBody>

        <AlertDialogFooter justifyContent="center">
          <Button ref={cancelRef} onClick={onClose} colorScheme="gray">
            Close
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;