import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import apiInstance from "../instances/apiInstances";
import { loginActions } from "../store/action/login/login.action";
import { _clearAuthCookies, getAuthCookie } from "../utils";
export const Context = createContext(null);

export const UserContext = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.login.user);
  const authToken = getAuthCookie();
  useEffect(() => {
    if (token || authToken) {
      async function getUser() {
        try {
          let url = "http://localhost:8000/";
          const response = await apiInstance().get(url + "getuserdetails");
          if (response.status == 200) {
            setUser(response.data.data);
          } else {
            setUser(null);
          }
        } catch (err) {
          setUser(null);
        }
      }
      getUser();
    }
  }, [token, authToken]);

  const handleLogin = useCallback((values) => {
    dispatch(loginActions(values, router));
  }, []);

  const handleLogout = useCallback(() => {
    _clearAuthCookies();
    setUser(null);
  }, []);

  return (
    <Context.Provider
      value={{
        user: user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => {
  return useContext(Context);
};
