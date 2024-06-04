import { Box, Button } from "@chakra-ui/react";
import { css, StyleSheet } from "aphrodite";

const ProductButtons = () => {
  return (
    <Box
      width={"100%"}
      position={"absolute"}
      zIndex={11}
      bottom={0}
      display={"none"}
    >
      <Button>Add</Button>
    </Box>
  );
};

export default ProductButtons;
