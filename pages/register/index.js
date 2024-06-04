import MainLayout from "../../components/shared/MainLayout";
import allImages from "../../constants/imageContants";
import { Form, Formik, Field } from "formik";
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
import "yup-phone";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { registerActions } from "../../store/action/register/register.action";
const Login = () => {
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const schema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    userName: Yup.string().required("Required"),
    phone: Yup.string().phone("IN", true, "Invalid phone number"),
    email: Yup.string()
      .required("Required")
      .email("Invalid Email")
      .matches(
        /^[a-z0-9A-Z.,\d\s/?;:'~!\\@"#$%^&*()[+=_/-]+$/,
        "Invalid Email"
      ),
    password: Yup.string().required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
  };
  const handleRegister = (values) => {
    // console.log(values);
    dispatch(registerActions(values));
  };

  return (
    <MainLayout>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDirection={["column", "column", "row"]}
      >
        <Box
          width={["320px", "300px", "400x"]}
          height={["320px", "300px", "400x"]}
          display={["none", "block"]}
          borderRadius="20px"
        >
          <Image
            src={allImages.example}
            borderRadius="20px"
            alt="ecom images"
            w="100%"
            h="100%"
            loading="lazy"
          />
        </Box>
        <Box
          className="curve-card login"
          maxW={["450px", "380px", "450px"]}
          w="100%"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleRegister}
          >
            {({ handleSubmit, errors, touched, ...formik }) => {
              return (
                <Form>
                  <chakra.h3
                    className="red_link"
                    textAlign={"center"}
                    mb="15px"
                  >
                    Complete Your Profile
                  </chakra.h3>
                  <VStack spacing={4} align="flex-start">
                    <FormControl
                      isInvalid={!!errors.firstName && touched.firstName}
                    >
                      <FormLabel htmlFor="email">First Name</FormLabel>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.lastName && touched.lastName}
                    >
                      <FormLabel htmlFor="email">Last Name</FormLabel>
                      <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.userName && touched.userName}
                    >
                      <FormLabel htmlFor="email">User Name</FormLabel>
                      <Field
                        as={Input}
                        id="userName"
                        name="userName"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        validate={(value) => {
                          let error;

                          if (value.length < 5) {
                            error =
                              "Password must contain at least 6 characters";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.phone && touched.phone}>
                      <FormLabel htmlFor="email">Phone Number</FormLabel>
                      <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      backgroundColor={"#ee8959"}
                      color={"white"}
                      fontWeight={600}
                      _hover={{ bg: "#e76f51" }}
                      width="full"
                      mt={"25px !important"}
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Register
                    </Button>
                  </VStack>
                </Form>
              );
            }}
          </Formik>
          <Flex justifyContent={"center"} alignItems={"center"} mt={"10px"}>
            <chakra.p mr={"2.5"}> Already a user?</chakra.p>
            <Link href={"/login"}>
              <chakra.span className="red_link">Sign in</chakra.span>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </MainLayout>
  );
};

export default Login;
