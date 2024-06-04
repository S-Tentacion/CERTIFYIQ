import { homeTypes } from "../../types/home/home.types";
import axios from "axios";

export const homeAction = () => async (dispatch) => {
  try {
    let url = "http://localhost:8000/products";
    dispatch(getHomeData());
    const response = await axios.get(url);
    console.log(response);
    if (response.status == 200) {
      dispatch(getHomeDataSuccess(response.data.products));
    } else {
      dispatch(getHomeDataFailure(response.data));
    }
  } catch (err) {
    console.log(err, "error");
    dispatch(getHomeDataFailure(err));
  }
};

export function getHomeData() {
  return {
    type: homeTypes.GET_HOME_DATA,
  };
}

export function getHomeDataSuccess(data) {
  return {
    type: homeTypes.GET_HOME_DATA_SUCCESS,
    payload: data,
  };
}

export function getHomeDataFailure(err) {
  return {
    type: homeTypes.GET_HOME_DATA_FAILURE,
    payload: err,
  };
}

export function getHomeDataInit() {
  return {
    type: homeTypes.GET_HOME_DATA_INIT,
  };
}
