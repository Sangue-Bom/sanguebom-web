import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/index";
import SingUp from "./pages/sign-up";
import Dashboard from "./pages/dashboard";
import { LoginProvider } from "./pages/login/LoginContext";
import SignUpProvider from "./pages/sign-up/SingUpContext";

function App() {
  return (
    <BrowserRouter>
      <SignUpProvider>
        <LoginProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SingUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </LoginProvider>
      </SignUpProvider>
    </BrowserRouter>
  );
}

export default App;
