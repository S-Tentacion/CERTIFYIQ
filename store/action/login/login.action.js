import { loginTypes } from "../../types/login/login.types";
import axios from "axios";
import { _setAuthCookies } from "../../../utils";

export const loginActions = (values, router) => async (dispatch, getState) => {
  try {
    let url = "http://localhost:8000/";
    dispatch(login());
    const response = await axios.post(url + "signin", values);
    dispatch(loginInit());
    if (response.status == 200) {
      _setAuthCookies(response.data.token);
      dispatch(loginSuccess(response.data.token));
      router.push("/");
    } else {
      dispatch(loginFailure(response));
    }
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

const login = () => {
  return {
    type: loginTypes.USER_LOGIN,
  };
};

const loginInit = () => {
  return {
    type: loginTypes.USER_LOGIN_INIT,
  };
};

const loginSuccess = (data) => {
  return {
    type: loginTypes.USER_LOGIN_SUCCESS,
    payload: data,
  };
};
const loginFailure = (error) => {
  return {
    type: loginTypes.USER_LOGIN_FAILURE,
    payload: error,
  };
};
