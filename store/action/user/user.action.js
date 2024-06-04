import { userTypes } from "../../types/user/user.types";
import apiInstance from "../../../instances/apiInstances";

export const userActions = () => async (dispatch, getState) => {
  try {
    let url = "http://localhost:8000/";
    dispatch(user());
    const response = await apiInstance().get(url + "getuserdetails");
    console.log(response)
    if (response.status == 200) {
      dispatch(userSuccess(response.data.data));
    } else {
      dispatch(userFailure(response));
    }
  } catch (err) {
    dispatch(userFailure(err.response.data));
  }
};

const user = () => {
  return {
    type: userTypes.GET_USER_DETAILS,
  };
};

const userInit = () => {
  return {
    type: userTypes.GET_USER_DETAILS_INIT,
  };
};

const userSuccess = (data) => {
  return {
    type: userTypes.GET_USER_DETAILS_SUCCESS,
    payload: data,
  };
};
const userFailure = (error) => {
  return {
    type: userTypes.GET_USER_DETAILS_FAILURE,
    payload: error,
  };
};
