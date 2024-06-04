import { loginTypes } from "../../types/login/login.types";

const initialState = {
  user: null,
  error: null,
  isloading: false,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case loginTypes.USER_LOGIN:
      return {
        ...state,
        isloading: true,
      };
    case loginTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isloading: false,
      };
    case loginTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
        isloading: false,
      };
    case loginTypes.USER_LOGIN_INIT:
      return {
        user: {},
        error: null,
        isloading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
