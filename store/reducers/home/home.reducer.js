import { homeTypes } from "../../types/home/home.types";

const initialState = {
  getHomeData: null,
  error: null,
  isloading: false,
};


const getHomeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case homeTypes.GET_HOME_DATA:
      return {
        ...state,
        isloading: true,
      };
    case homeTypes.GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        getHomeData: payload,
      };
    case homeTypes.GET_HOME_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        error: payload,
      };
    case homeTypes.GET_HOME_DATA_INIT:
      return {
        ...state,
        getHomeData: null,
        error: null,
        isloading: false,
      };
    default:
      return state;
  }
};

export default getHomeReducer;
