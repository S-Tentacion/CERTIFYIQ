import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import allImages from "../../constants/imageContants";
import { css, StyleSheet } from "aphrodite";
import UserProfileAction from "./UserProfileActions";
import { MOBILE_QUERY } from "../../constants/mediaQueries";
import Link from "next/link";
import { useUserContext } from "../../context/AuthContext";
import { BiLogIn } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import GlobalInput from "./GlobalInput";
import { useRouter } from "next/router";

const Header = () => {
  const { user } = useUserContext();
  const router = useRouter();
  const path = router.pathname;
  const notAllowedPaths = ["/login", "/register"];
  return (
    <chakra.header h={"120px"} className={css(styles.container)}>
      <Box className={css(styles.wrapper)} h={"100%"} w={"100%"}>
        <Box className={css(styles.leftWrapper)}>
          <Link href={"/"}>
            <Text fontWeight={"800"} className="certifyiq">
              {"CertifyIQ"}
            </Text>
          </Link>
            {!notAllowedPaths.includes(path) ? <GlobalInput /> : null}
        </Box>
        {!user ? (
          <Flex columnGap={"0.5rem"}>
            <Link href={"/register"}>
              <chakra.p className={css(styles.loginBtn)}>
                <Icon as={SiGnuprivacyguard} boxSize="1.2rem" />
                Signup
              </chakra.p>
            </Link>
            <Link href={"/login"}>
              <chakra.p className={css(styles.loginBtn)}>
                <Icon as={BiLogIn} boxSize="1.2rem" />
                Login
              </chakra.p>
            </Link>
          </Flex>
        ) : null}
        {/* <UserProfileAction /> */}
      </Box>
      <svg
        data-component="a9-ribbon"
        data-key="s001-main-navigation"
        width="100%"
        height="6px"
        fill="#dee2e6"
      >
        <defs>
          <pattern
            id="ribbon_s001-main-navigation"
            x="-36"
            y="0"
            width="45"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 0 0 C 11 0 11 6 21 6 C 31 6 31 0 42 0"></path>
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#ribbon_s001-main-navigation)"
        ></rect>
      </svg>
    </chakra.header>
  );
};

const styles = StyleSheet.create({
  leftWrapper: {
    height: "70%",
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    [MOBILE_QUERY]: {
      height: "100%",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "7px 35px",
    [MOBILE_QUERY]: {
      padding: "7px 22px",
    },
  },
  loginBtn: {
    fontWeight: "600",
    color: "#f4a261",
    fontSize: "1.2rem",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    columnGap: "5px",
    cursor: "pointer",
  },
  searchBox: {
    width: "450px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [MOBILE_QUERY]: {
      display: "none",
    },
  },
  container: {
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
    backgroundColor: "#dee2e6",
    // backgroundColor: "#181123",
    position: "sticky",
    top: 0,
    zIndex: 9999,
  },
  searchIcon: {
    height: "100%",
    borderRadius: "0px 6px 6px 0px",
    backgroundColor: "#f5f5f6",
    ":focus": {
      boxShadow: "none",
    },
  },
  searchBar: {
    display: "inline-block",
    fontSize: "1.5rem",
    height: "100%",
    // lineHeight: "24px",
    width: "100%",
    padding: "8px 10px 10px",
    border: "1px solid #f5f5f6",
    borderRadius: "6px 0px 0px 6px",
    backgroundColor: "#f5f5f6",
    ":focus": {
      backgroundColor: "#fff",
      borderColor: "#eaeaec",
    },
  },
});

export default Header;
