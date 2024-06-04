import Cookies from "js-cookie";

const authCookieConfig = {
  path: "/",
  domain: process.env.NODE_ENV === "development" ? undefined : ".example.com",
  sameSite: "strict",
  expires: 180,
};

export const _setAuthCookies = (token) => {
  Cookies.set("authtoken", token, authCookieConfig);
};
export const _clearAuthCookies = () => {
  Cookies.remove("authtoken", authCookieConfig);
  Cookies.remove("authtoken", { expires: 180, path: "/" });
};

export const _getCookies = (key) => {
  return isBlank(Cookies.get(key)) ? undefined : Cookies.get(key);
};

export function getAuthCookie() {
  return _getCookies("authtoken");
}
export const isBlank = (str) => {
  return !str || /^\s*$/.test(str);
};
