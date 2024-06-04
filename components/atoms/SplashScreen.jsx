import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
const SplashScreen = ({ name }) => {
  const { isLg } = useMediaQuery();
  return (
    <Flex
      flexDirection="column"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor={"#fff"}
    >
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
      <Text
        variant={isLg ? "mdTextRegular" : "textRegular"}
        fontWeight="bold"
        color={"#805AD5"}
      >
        Loading... Please Wait
      </Text>
    </Flex>
  );
};

export default SplashScreen;
