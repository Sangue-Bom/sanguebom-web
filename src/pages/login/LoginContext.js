import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleUsername(value) {
    setUser({ ...user, username: value });
  }

  function handlePassword(value) {
    setUser({ ...user, password: value });
  }

  async function handleLogin() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/hospital/login`, {
        hosp_username: user.username,
        hosp_password: user.password,
      })
      .then((res) => {
        if (res.status == 200) {
          setUser(res.data);
          navigate('/dashboard');
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
