import { Box, Flex, Text } from "@chakra-ui/react";
import { css, StyleSheet } from "aphrodite";

const ProductCurrency = ({ price }) => {
  console.log(price);
  return (
    <Flex alignItems={"center"} mt="6px">
      <Text fontWeight={"800"} className={css(styles.cost)}>
        Rs. {price.cost}
      </Text>
      <Text className={css(styles.mrp)} ml="10px">
        Rs. {price.mrp}
      </Text>
      <Text
        ml="10px"
        className={css(styles.discount)}
      >{`(${price.discount} Off)`}</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  mrp: {
    textDecoration: "line-through",
    color: "#7e818c",
    fontWeight: "400",
    fontSize: "12px",
  },
  discount: {
    color: "#ff905a",
    fontWeight: "400",
    fontSize: "12px",
  },
  cost: {
    color: "#282c3f",
    fontWeight: "800",
    fontSize: "14px",
  },
});
export default ProductCurrency;
