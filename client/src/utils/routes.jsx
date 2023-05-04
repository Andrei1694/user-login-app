import UserProvider from "../context/UserContext";
import HomePage from "../pages/Home";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import { createBrowserRouter } from "react-router-dom";
import WeatherProvider from "../context/WeatherContext";
import WeatherPage from "../pages/weather/Weather.page";
import LoginPage from "../pages/login/Login.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/weather",
        element: (
          <WeatherProvider>
            <WeatherPage />
          </WeatherProvider>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
