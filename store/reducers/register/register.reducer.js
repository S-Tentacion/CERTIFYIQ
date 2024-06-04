import { registerTypes } from "../../types/register/register.types";

const initialState = {
  user: {},
  error: null,
  isloading: false,
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case registerTypes.USER_REGISTER:
      return {
        ...state,
        isloading: true,
      };
    case registerTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        isloading: false,
      };
    case registerTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        error: payload,
        isloading: false,
      };
    case registerTypes.USER_REGISTER_INIT: {
      return {
        user: {},
        error: null,
        isloading: false,
      };
    }
    default:
      return state;
  }
};

export default registerReducer;
