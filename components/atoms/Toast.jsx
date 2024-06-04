import React from "react";
import { Box, chakra, createStandaloneToast, Link } from "@chakra-ui/react";
import { Check, Info, XCircle } from "react-feather";
const toasts = createStandaloneToast();

/*
custom toast UI same as react-hot-toast library
*/
const ToastUI = (message, icon, isButton = false, onClick, btnName) => {
  return (
    <Box
      w="fit-content"
      zIndex="auto"
      justifyContent="center"
      alignItems="center"
      rounded="lg"
      display="flex"
      p="3"
      mt="2"
      mx="auto"
      color="black"
      fontWeight={600}
      boxShadow="md"
      bg={isButton ? "blue.600" : "white"}
    >
      {icon}
      <chakra.span
        my="auto"
        mx="auto"
        bg={isButton ? "blue.600" : "white"}
        color={isButton ? "white" : ""}
        zIndex="111"
        ml="3"
        fontSize="16px"
        fontWeight="500"
        lineHeight="1.4"
      >
        {message}
      </chakra.span>
      {isButton && (
        <Link
          href={onClick}
          isExternal
          bg="gray.100"
          textAlign="center"
          width={["233px", "252px"]}
          borderRadius="12px"
          fontSize={["12px", "16px"]}
        >
          {btnName}
        </Link>
      )}
    </Box>
  );
};

/*
error toast icon same as react-hot-toast library
*/
const errorIcon = (
  <Box
    borderRadius="xl"
    zIndex="111"
    h="5"
    maxH="10"
    w="5"
    maxW="10"
    textAlign="center"
    mt="-2"
    ml="-2"
    p="1"
  >
    <XCircle strokeWidth="2px" color="white" fill="#ec432f" />
  </Box>
);

/*
success toast icon same as react-hot-toast library
*/
const successIcon = (
  <Box
    borderRadius="xl"
    zIndex="111"
    h="5"
    maxH="10"
    w="5"
    maxW="10"
    textAlign="center"
    p="1"
    bg="#69d84f"
  >
    <Check
      style={{ marginTop: "0.2px", marginLeft: "0.2px" }}
      strokeWidth="5px"
      color="white"
      size="12px"
    />
  </Box>
);

const infoIcon = (
  <Box
    borderRadius="xl"
    zIndex="111"
    h="6"
    mx="auto"
    maxH="10"
    w="8"
    maxW="10"
    textAlign="center"
    p="1.2"
    bg="blue.600"
  >
    <Info
      style={{ marginTop: "0.8px", marginLeft: "3px" }}
      strokeWidth="5px"
      color="white"
      size="18px"
    />
  </Box>
);

const toast = {
  error(message, options) {
    try {
      toasts({
        ...options,
        status: "error",
        position: "top",
        duration: 2500,
        render: () => {
          return ToastUI(message, errorIcon);
        },
      });
    } catch {
      console.log("toast error");
    }
  },
  success(message, options) {
    try {
      toasts({
        ...options,
        status: "success",
        position: "top",
        duration: 2500,
        render: () => {
          return ToastUI(message, successIcon);
        },
      });
    } catch {
      console.log("toast error");
    }
  },
  warning(message, options) {
    toasts({
      ...options,
      title: message,
      status: "warning",
      position: "top",
      duration: 1000,
    });
  },
  info(message, duration, isButton, onClick, btnName, options) {
    toasts({
      ...options,
      title: message,
      status: "info",
      position: "top",
      duration: duration,
      render: () => {
        return ToastUI(message, infoIcon, isButton, onClick, btnName);
      },
    });
  },
};

export default toast;
