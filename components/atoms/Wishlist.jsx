import { Flex, Icon, Text } from "@chakra-ui/react";
import { css, StyleSheet } from "aphrodite";
import { IoHeartOutline } from "react-icons/io5";
import { colors } from "../../constants/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MOBILE_QUERY } from "../../constants/mediaQueries";

const Wishlist = () => {
  const { isLg } = useMediaQuery();

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={css(styles.wishlistBox)}
      >
        <button type="button" className={css(styles.iconButton)}>
          <Icon
            variant="ghost"
            className={css(styles.icon)}
            style={{
              cursor: "pointer",
            }}
            boxSize="1.6rem"
            as={IoHeartOutline}
          />
          {/* {getWishlistCount > 0 && ( */}
          <span className={css(styles.iconButtonBadge)}>{5}</span>
          {/* )} */}
        </button>
        <Text fontSize="x-small" cursor="pointer">
          Wishlist
        </Text>
      </Flex>
      <button type="button" className={css(styles.miconButton)}>
        <Icon
          variant="ghost"
          className={css(styles.icon)}
          style={{
            cursor: "pointer",
          }}
          boxSize="1.6rem"
          as={IoHeartOutline}
        />
        {/* {getWishlistCount > 0 && (
            <span className={css(styles.iconButtonBadge)}>
              {getWishlistCount}
            </span>
          )} */}
      </button>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: "50%",
  },
  background: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: colors.green,
    color: "#fff",
    textAlign: "center",
    zIndex: 5,
    cursor: "pointer",
  },
  iconButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    border: "none",
    outline: "none",
    borderRadius: "50%",
  },
  miconButton: {
    position: "relative",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    border: "none",
    outline: "none",
    borderRadius: "50%",
    [MOBILE_QUERY]: {
      display: "flex",
    },
  },
  iconButtonBadge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    width: "17px",
    height: "17px",
    background: "#fff",
    color: colors.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "10px",
    borderWidth: "2px",
    borderColor: "#eabec3",
  },
  wishlistBox: {
    display: "flex",
    [MOBILE_QUERY]: {
      display: "none",
    },
    ":hover": {
      color: "#FF9636",
    },
  },
});

export default Wishlist;
