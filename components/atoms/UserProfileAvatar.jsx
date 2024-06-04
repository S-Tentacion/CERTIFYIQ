import { Avatar, Text, Box, Flex } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { useUserContext } from "../../context/AuthContext";
import { css, StyleSheet } from "aphrodite";
import { _clearAuthCookies } from "../../utils/index";
const UserProfileAvatar = () => {
  const { user, handleLogout } = useUserContext();
  //
  return (
    <>
      <Popover autoFocus={false} trigger="hover">
        <PopoverTrigger>
          <Box>
            <Avatar name="" size="sm"></Avatar>
            <Text
              fontSize="x-small"
              display={["none", "block"]}
              cursor="pointer"
            >
              Profile
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent bgColor={colors.light} width={180}>
          <PopoverBody>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {user ? (
                <>
                  <Box width="full" as="button">
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      mb={2}
                      className={css(styles.textStyles)}
                      textAlign="left"
                    >
                      Edit Profile
                    </Text>
                  </Box>
                  <Box width="full" as="button">
                    <Text
                      fontSize="sm"
                      mb={2}
                      className={css(styles.textStyles)}
                      textAlign="left"
                    >
                      Order History
                    </Text>
                  </Box>
                  <Box width="full" as="button">
                    <Text
                      fontSize="sm"
                      mb={2}
                      className={css(styles.textStyles)}
                      textAlign="left"
                    >
                      Manage Address
                    </Text>
                  </Box>
                  <Box width="full" as="button">
                    <Text
                      fontSize="sm"
                      mb={2}
                      className={css(styles.textStyles)}
                      textAlign="left"
                    >
                      Referral
                    </Text>
                  </Box>
                  <Box width="full" as="button">
                    <Text
                      fontSize="sm"
                      mb={2}
                      textAlign="left"
                      color={"red"}
                      onClick={handleLogout}
                    >
                      Logout
                    </Text>
                  </Box>
                </>
              ) : null}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
const styles = StyleSheet.create({
  icon: {
    borderRadius: "50%",
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
  iconButtonBadge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    width: "17px",
    height: "17px",
    background: colors.lightBlue,
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "10px",
  },
  profileBox: {
    ":hover": {
      color: colors.green,
    },
  },
  textStyles: {
    ":hover": {
      color: colors.green,
      cursor: "pointer",
    },
  },
});

export default UserProfileAvatar;
