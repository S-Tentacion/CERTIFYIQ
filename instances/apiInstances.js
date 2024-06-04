import axios from "axios";
// import userLogout from "../utils/debunceuserlogout";
import { _getCookies } from "../utils/index";

function apiInstance(url, headers, disableAuth = false) {
  const instance = axios.create({
    baseURL:
      url === "secure"
        ? process.env.NEXT_PUBLIC_SECURE_URL
        : process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "content-type": "application/json",
      ...(_getCookies("authtoken") &&
        !disableAuth && {
          authorization: `Bearer ${_getCookies("authtoken")}`,
        }),
      ...headers,
    },
  });
  instance.interceptors.response.use(undefined, (err) => {
    // if (
    //   err?.response?.status === 401 &&
    //   !String(err.response.config.url).includes("login")
    // ) {
    //   userLogout();
    // }
    return err.response?.data;
  });
  return instance;
}

export default apiInstance;
