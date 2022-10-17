import "../styles/globals.css";
import type { AppProps } from "next/app";
import SignUpProvider from "../pages/sign-up/SingUpContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignUpProvider>
      <Component {...pageProps} />
    </SignUpProvider>
  );
}

export default MyApp;
