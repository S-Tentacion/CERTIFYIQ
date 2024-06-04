import { userTypes } from "../../types/user/user.types";

const initialState = {
  getUserDetails: null,
  error: null,
  isloading: false,
};

const getUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userTypes.GET_USER_DETAILS:
      return {
        ...state,
        isloading: true,
      };
    case userTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        getUserDetails: payload,
        isloading: false,
      };
    case userTypes.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        error: payload,
        isloading: false,
      };
    case userTypes.GET_USER_DETAILS_INIT: {
      return {
        getUserDetails: null,
        error: null,
        isloading: false,
      };
    }
    default:
      return state;
  }
};

export default getUserReducer;
