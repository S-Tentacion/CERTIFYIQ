import { registerTypes } from "../../types/register/register.types";
import axios from "axios";

export const registerActions = (values) => async (dispatch, getState) => {
  try {
    let url = "http://localhost:8000/";
    dispatch(register());
    const response = await axios.post(url + "signup", values);
    dispatch(registerInit());
    if (response.status == 200) {
      dispatch(registerSuccess(response.data.message));
    } else {
      dispatch(registerFailure(response));
    }
  } catch (err) {
    dispatch(registerFailure(err.response.data));
  }
};

const register = () => {
  return {
    type: registerTypes.USER_REGISTER,
  };
};

const registerInit = () => {
  return {
    type: registerTypes.USER_REGISTER_INIT,
  };
};

const registerSuccess = (data) => {
  return {
    type: registerTypes.USER_REGISTER_SUCCESS,
    payload: data,
  };
};
const registerFailure = (error) => {
  return {
    type: registerTypes.USER_REGISTER_FAILURE,
    payload: error,
  };
};
