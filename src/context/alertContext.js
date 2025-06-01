import {createContext, useContext, useState, useEffect, useCallback} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: `All good!`,
  });

  const onOpen = useCallback((type, message) => {
    setState({ isOpen: true, type, message });
    console.log("Alert Opened:", {isOpen: true, type, message })
  }, []);

  const onClose = useCallback(() => {
    setState({ isOpen: false, type: '', message: '' });
  }, []);

  useEffect(() => {
    let timer; //Declaring timer outside the if block

    if (state.isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, 3000); //Close alert after 3 seconds
    }
    // Cleanup function
    return () => {
      if(timer) {
        clearTimeout(timer);
      }
    };
  }, [state.isOpen, onClose]);
  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen,
        onClose
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
