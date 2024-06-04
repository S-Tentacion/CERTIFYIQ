import { Button, Wrap, WrapItem, Text } from "@chakra-ui/react";
import CartActions from "../atoms/CartItems";
import Wishlist from "../atoms/Wishlist";
import { css, StyleSheet } from "aphrodite";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SearchIcon } from "@chakra-ui/icons";
import { MOBILE_QUERY } from "../../constants/mediaQueries";
import UserProfileAvatar from "../atoms/UserProfileAvatar";
import { useUserContext } from "../../context/AuthContext";

const UserProfileAction = () => {
  const { isLg } = useMediaQuery();
  const { user } = useUserContext();
  return (
    <Wrap spacing={["5px", "22px"]} align="center">
      <WrapItem>
        <Button
          className={css(styles.searchIcon)}
          variant="outline_black"
          size={"md"}
          leftIcon={<SearchIcon boxSize="1.2rem" />}
        ></Button>
      </WrapItem>
      <WrapItem>
        <Wishlist />
      </WrapItem>
      <WrapItem>
        <CartActions />
      </WrapItem>
      {user ? (
        <WrapItem display={"flex"} flexDirection={"column"}>
          <UserProfileAvatar />
        </WrapItem>
      ) : null}
    </Wrap>
  );
};
const styles = StyleSheet.create({
  searchIcon: {
    borderRadius: "6px 0 0 6px",
    display: "none",
    [MOBILE_QUERY]: {
      display: "block",
    },
  },
});
export default UserProfileAction;
