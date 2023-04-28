import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/Login.page";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import { UserContext } from "./context/UserContext";
import ProtectedLayout from "./pages/ProtectedLayout";
import WeatherPage from "./pages/weather/Weather.page";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getMyProfileRequest } from "./requests";

function App() {
  const { user, setUser, handleLogin } = useContext(UserContext);
  const [cookies] = useCookies(["token"]);
  useEffect(() => {
    const checkUser = async () => {
      if (cookies.token) {
        try {
          const user = await getMyProfileRequest(cookies.token);
          if (user) setUser(user);
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkUser();
  }, []);
  function renderRoutes() {
    if (!user) {
      return (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      );
    }
    return (
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    );
  }
  return <>{renderRoutes()}</>;
}

export default App;
