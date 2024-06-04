import { useState } from "react";
import { chakra } from "@chakra-ui/system";
import { css, StyleSheet } from "aphrodite";
import { MOBILE_QUERY } from "../../constants/mediaQueries";
import { Box, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function debouncing(fn, del) {
  let timer;
  return (...args) => {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, del);
  };
}

const GlobalInput = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const optimizedFn = debouncing((e) => {
    handleChange(e);
  }, 300);

  return (
    <Box className={css(styles.searchBox)}>
      <chakra.input
        className={css(styles.searchBar) + " header-search-bar"}
        type={"text"}
        placeholder={"Search your exam..."}
        onChange={optimizedFn}
      />
      <Button
        className={css(styles.searchIcon)}
        variant="outline_black"
        size={"md"}
        leftIcon={<SearchIcon boxSize="1.2rem" />}
      ></Button>
    </Box>
  );
};

const styles = StyleSheet.create({
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

export default GlobalInput;
