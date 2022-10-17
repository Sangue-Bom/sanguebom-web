import { createContext, useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();

  function handleUsername(value) {
    setUser({ ...user, username: value });
  }

  function handlePassword(value) {
    setUser({ ...user, password: value });
  }

  async function handleLogin() {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/hospital/login`, {
        hosp_username: user.username,
        hosp_password: user.password,
      })
      .then((res) => {
        if (res.status == 200) {
          setUser(res.data);
          console.log(user);
          router.push('/dashboard');
        }
      });
  }
  return (
    <LoginContext.Provider
      value={{ user, handleUsername, handlePassword, handleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};
