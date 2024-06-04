import { debounce } from "lodash";
// import toast from "@/components/atoms/toast";
import apiInstance from "./apiInstance";
import apiEndpoints from "../constants/apiEndpoints";
import { _clearAuthCookies } from ".";
import toast from "../components/atoms/Toast";
function userLogout(message = "You are not authorized, please login again") {
  toast.error(message);
  apiInstance().post(apiEndpoints.LOGOUT).then().catch();
  if (typeof window !== "undefined") {
    _clearAuthCookies();
    window.location.href = routes.login;
  }
}
export const debouncedLogout = debounce(userLogout, 1500);

export default userLogout;
