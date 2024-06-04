import { Box, Flex } from "@chakra-ui/react";
import { css, StyleSheet } from "aphrodite";
import Image from "next/image";
import ProductButtons from "../atoms/ProductButtons";
import ProductCurrency from "../atoms/ProductCurrency";
import ProductDetails from "../atoms/ProductDetails";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Box className={css(styles.cardLayout)} key={product.id}>
      <Box width={"100%"} height="250px" position={"relative"} mb="20px">
        <Image src={product.url} layout="fill" objectFit="contain" />
      </Box>
      <ProductDetails details={product.title} />
      <ProductCurrency price={product.price} />
      {/**Hover buttons */}
      <ProductButtons />
    </Box>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    width: "100%",
    height: "380px",
    borderRadius: "12px",
    padding: "25px",
    backgroundColor: "#fff",
    position: "relative",
  },
});

export default ProductCard;
