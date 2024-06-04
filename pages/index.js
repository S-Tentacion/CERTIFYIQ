import { useEffect, useRef, useState } from "react";
import SplashScreen from "../components/atoms/SplashScreen";
// import toast from "../components/atoms/Toast";
import MainLayout from "../components/shared/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../store/action/home/home.action";
import ProductCard from "../components/shared/ProductCard";
import { Box, Input } from "@chakra-ui/react";
import { css, StyleSheet } from "aphrodite";
import apiInstance from "../instances/apiInstances";
function Home() {
  const state = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const ref = useRef("");

  const [formSate, setFormState] = useState({
    phonenumber: "",
    website: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    dispatch(homeAction());
    const controller = new AbortController();
    apiInstance()
      .get("https://dummyjson.com/products", {
        signal: AbortSignal.timeout(0),
      })
      .then(
        (res) => {
          console.log(res, "res");
        },  
        (err) => {
          console.log("error-abort", err);
        }
      );
    // .catch((err) => {
    //   console.log("error", err);
    // });
  }, []);
  return (
    <MainLayout>
      <Box className={css(styles.productgrid)}>
        {state?.getHomeData?.map((e) => {
          return <ProductCard product={e} />;
        })}
      </Box>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  productgrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
});

export default Home;

// axios instance file
// token set in cookies set
// user context in _appjs file
// 404
//_500
// _error
// product card
// banners
// search bar integraation
//otp based login & Register
// paytm integration
// user orders page
// user address page
// cart page
//wishlist page
// about animated page
// terms & condition
// email trigger and send resume
// ui changes if any responsive
