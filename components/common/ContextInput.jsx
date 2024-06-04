import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import useMediaQuery from "../../hooks/useMediaQuery";

// import useMediaQuery from "../../../hooks/useMediaQuery";

const FormInput = ({ isRequired, label, name, isPincode = false, ...rest }) => {
  const { isLg } = useMediaQuery();
  const { values, handleBlur, errors, touched, setFieldValue } =
    useFormikContext();

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={errors[name] && touched[name]}
      mb={"10px"}
    >
      <FormLabel fontSize={["12px", "16px"]}>{label}</FormLabel>
      <Input
        className="form-control"
        size={isLg ? "md" : "sm"}
        name={name}
        value={values[name]}
        onChange={(e) => {
          handleChange(e);
        }}
        onBlur={handleBlur}
        {...rest}
      />
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
