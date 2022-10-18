import "../styles/globals.css";
import SignUpProvider from "../pages/sign-up/SingUpContext";
import {LoginProvider} from "./login/LoginContext";

function MyApp({ Component, pageProps}) {
  return (
    <SignUpProvider>
      <LoginProvider>
      <Component {...pageProps} />
      </LoginProvider>
    </SignUpProvider>
  );
}

export default MyApp;
