import ChakraConfig from "../services/ChakraConfig";
import { useStore } from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import "../styles/root.scss";
import SplashScreen from "../components/atoms/SplashScreen";
import { UserContext } from "../context/AuthContext";


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initializeReduxState);
  const persistor = persistStore(store, {}, () => persistor.persist());
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <ChakraConfig>
          <UserContext>
            <Component {...pageProps} />
          </UserContext>
        </ChakraConfig>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
