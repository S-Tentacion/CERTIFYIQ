import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import registerReducer from "../store/reducers/register/register.reducer";
import loginReducer from "../store/reducers/login/login.reducer";
import userReducer from "../store/reducers/user/user.reducer";
import homeReducer from "../store/reducers/home/home.reducer";

let store;

const persistedReducer = persistCombineReducers(
  {
    key: "ecom",
    storage,
    whitelist: ["user"],
  },
  {
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
    home: homeReducer,
  }
);

const makeStore = (initialState = {}) =>
  createStore(
    persistedReducer,
    initialState,
    process.env.NODE_ENV === "production"
      ? applyMiddleware(thunk)
      : composeWithDevTools(applyMiddleware(thunk))
  );

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState) => {
  return useMemo(() => initializeStore(initialState), [initialState]);
};
