import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/Login.page";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import { UserContext } from "./context/UserContext";
import WeatherPage from "./pages/weather/Weather.page";
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { getMyProfileRequest } from "./requests";
import ProtectedLayout from "./pages/ProtectedLayout";

function App() {
  const { setUser } = useContext(UserContext);
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
  }, [cookies.token]);
  function renderRoutes() {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    );
  }
  return <>{renderRoutes()}</>;
}

export default App;
