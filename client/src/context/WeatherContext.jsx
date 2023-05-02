import { createContext, useState } from "react";
import { getCurrentWeatherRequest } from "../requests";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleGetWeather = async () => {
    setLoading(true);
    try {
      const data = await getCurrentWeatherRequest();
      const { current_weather } = data;
      console.log(data);
      setCurrentWeather({ ...current_weather });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        handleGetWeather,
        isLoading,
        isError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
