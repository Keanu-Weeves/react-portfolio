// src/components/Alert.js
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton,
  Button,
  Flex, // You might need Flex or Box for layout
  Text,
  Heading,
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import { useRef } from 'react'; // <--- ADD THIS LINE
// import { Text, Heading } from '@chakra-ui/react'; // Ensure these are also imported if used

const Alert = ({ onClose, isOpen, message }) => { // message here is an object {type, description}
  const cancelRef = useRef();

  // You are using the useAlertContext to get isOpen, type, and message.
  // So, the props passed to Alert component (`onClose`, `isOpen`, `message`)
  // might be redundant or could lead to confusion.
  // Let's use the context values directly as intended.
  const {
    isOpen: contextIsOpen, // Rename to avoid prop/context name conflict
    type: contextType,
    message: contextMessage,
    onClose: contextOnClose
  } = useAlertContext();

  // Use context values
  const displayIsOpen = isOpen || contextIsOpen; // Prioritize prop if provided, else context
  const displayType = contextType;
  const displayMessage = contextMessage;
  const handleClose = onClose || contextOnClose; // Prioritize prop if provided, else context


  if (!displayIsOpen) return null; // Use the combined open state

  // Determine success/error for styling
  const isSuccess = displayType === 'success';

  return (
    <AlertDialog
      isOpen={displayIsOpen}          // Use the combined open state
      leastDestructiveRef={cancelRef} // Required for AlertDialog
      onClose={handleClose}           // Use the combined close handler
      isCentered                     // Optional: to center the dialog
    >
      <AlertDialogOverlay /> {/* This is the backdrop */}

      <AlertDialogContent
        maxW="md" // Set a max-width
        p={6}
        textAlign="center"
        borderRadius="md"
        // Dynamic background and text color based on message type
        bg={isSuccess ? 'green.100' : 'red.100'}
        color={isSuccess ? 'green.800' : 'red.800'}
      >
        <AlertDialogCloseButton /> {/* Optional close button */}

        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {displayMessage?.type === "success" ? "All good!" : "Oops!"}
        </AlertDialogHeader>

        <AlertDialogBody>
          <Text>{displayMessage?.description}</Text>
        </AlertDialogBody>

        <AlertDialogFooter justifyContent="center">
          <Button ref={cancelRef} onClick={handleClose} colorScheme="gray">
            Close
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;