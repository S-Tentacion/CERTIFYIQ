import { Box, Text } from "@chakra-ui/react";
import { css, StyleSheet } from "aphrodite";

const ProductDetails = ({ details }) => {
  return (
    <Box width={"100%"}>
      <Text fontWeight={"800"}>{details.shortTitle}</Text>
      <Text fontSize={"12px"} className={css(styles.longtext)}>
        {details.longTitle}
      </Text>
    </Box>
  );
};
const styles = StyleSheet.create({
  longtext: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});
export default ProductDetails;
