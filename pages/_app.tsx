import "../styles/globals.css";
import type { AppProps } from "next/app";
import SignUpProvider from "../pages/sign-up/SingUpContext";
import {LoginProvider} from "./login/LoginContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignUpProvider>
      <LoginProvider>
      <Component {...pageProps} />
      </LoginProvider>
    </SignUpProvider>
  );
}

export default MyApp;
