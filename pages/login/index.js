import MainLayout from "../../components/shared/MainLayout";
import allImages from "../../constants/imageContants";
import { Form, Formik } from "formik";
import {
  Flex,
  Box,
  Image,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import * as Yup from "yup";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRive, useStateMachineInput } from "rive-react";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/AuthContext";
const STATE_MACHINE_NAME = "State Machine 1";
const Login = () => {
  const state = useSelector((state) => state.login);
  const { handleLogin } = useUserContext();
  const [user, setUser] = useState(null);
  const [allGood, setAllGood] = useState(false);
  const { rive, RiveComponent } = useRive({
    src: "/logo/520-990-teddy-login-screen.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });
  const schema = Yup.object({
    email: Yup.string()
      .required("Required")
      .email("Invalid Email")
      .matches(
        /^[a-z0-9A-Z.,\d\s/?;:'~!\\@"#$%^&*()[+=_/-]+$/,
        "Invalid Email"
      ),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be atleast 6"),
  });
  useEffect(() => {
    if (state.error && state.error.message) {
      let timmer;
      timmer = setTimeout(() => {
        triggerFail();
        clearTimeout(timmer);
      }, 800);
    }
  }, [state]);
  const handleFormSubmit = (values) => {
    // triggerSuccess();
    setHangUp(false);
    handleLogin(values);
  };
  useEffect(() => {
    setLook();
  }, [user]);

  const stateSuccess = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "success"
  );
  const stateFail = useStateMachineInput(rive, STATE_MACHINE_NAME, "fail");
  const stateHandUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "hands_up"
  );

  const stateCheck = useStateMachineInput(rive, STATE_MACHINE_NAME, "Check");
  const stateLook = useStateMachineInput(rive, STATE_MACHINE_NAME, "Look");

  const triggerSuccess = () => {
    stateSuccess && stateSuccess.fire();
  };
  const triggerFail = () => {
    stateFail && stateFail.fire();
  };

  const setHangUp = (hangUp) => {
    stateHandUp && (stateHandUp.value = hangUp);
  };

  const setLook = () => {
    if (!stateLook || !stateCheck || !setHangUp) {
      return;
    }
    setHangUp(false);
    setCheck(true);
    let nbChars = 0;
    if (user) {
      nbChars = parseFloat(user.split("").length);
    }

    let ratio = nbChars / parseFloat(41);

    let lookToSet = ratio * 100;
    stateLook.value = Math.round(lookToSet);
  };
  const setCheck = (check) => {
    if (stateCheck) {
      stateCheck.value = check;
    }
  };

  console.log(state);

  return (
    <MainLayout>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDirection={["column", "column", "row"]}
      >
        <Image
          src={allImages.mergedgif}
          alt="ecom images"
          loading="lazy"
          width={["320px", "300px", "400x"]}
          height={["320px", "300px", "400x"]}
          borderRadius="20px"
          display={["none", "block"]}
          objectFit="contain"
        />
        <Box
          className="curve-card login"
          maxW={["450px", "380px", "450px"]}
          w="100%"
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={handleFormSubmit}
          >
            {({ handleSubmit, errors, touched, ...formik }) => {
              setAllGood(!(formik.isValid && formik.dirty));
              return (
                <Form>
                  <chakra.h3
                    className="red_link"
                    textAlign={"center"}
                    mb="15px"
                  >
                    Welcome Back!
                  </chakra.h3>
                  {/* <div class="svgContainer"> */}
                  {/* <div>
                      <Image
                        src={allImages.yeti}
                        width="100%"
                        height={"100%"}
                      />
                    </div> */}
                  <RiveComponent
                    className="svgContainer"
                    src="520-990-teddy-login-screen.riv"
                  />
                  <VStack spacing={4} align="flex-start">
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Input
                        // as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                        value={formik.values.email}
                        onFocus={() => {
                          setHangUp(false);
                        }}
                        onChange={(e) => {
                          setUser(e.target.value);
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        value={formik.values.password}
                        onFocus={() => {
                          setHangUp(true);
                        }}
                        onChange={(e) => {
                          setHangUp(true);
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    {/* <Field
                      as={Checkbox}
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme="purple"
                    >
                      Remember me?
                    </Field> */}
                    {state.error?.message ? (
                      <chakra.p className="red_link" fontSize={"11px"}>
                        {state.error?.message}
                      </chakra.p>
                    ) : null}
                    <Link href={"/"}>
                      <p className="red_link">Forgot Password?</p>
                    </Link>
                    <Button
                      type="submit"
                      backgroundColor={"#ee8959"}
                      color={"white"}
                      fontWeight={600}
                      _hover={{ bg: "#e76f51" }}
                      width="full"
                      onMouseEnter={() => {
                        setHangUp(false);
                      }}
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Login
                    </Button>
                  </VStack>
                </Form>
              );
            }}
          </Formik>
          <Flex justifyContent={"center"} alignItems={"center"} mt={"10px"}>
            <chakra.p mr={"2.5"}> Want to Register?</chakra.p>
            <Link href={"/register"}>
              <chakra.span className="red_link">Sign Up</chakra.span>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </MainLayout>
  );
};

export default Login;
