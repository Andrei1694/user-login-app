import { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import styled from "styled-components";
const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
`;

const TemperatureValue = styled.div`
  color: #3f51b5;
`;

const TemperatureUnit = styled.div`
  color: #666;
  font-size: 16px;
`;
export default function WeatherPage() {
  const { currentWeather, handleGetWeather, isLoading } =
    useContext(WeatherContext);
  useEffect(() => {
    const callHandle = async () => {
      await handleGetWeather();
    };
    callHandle();
  }, []);
  const renderCurrentWeather = () => {
    return <div>{currentWeather?.temperature}</div>;
  };

  return (
    <>
      <h1>Weather</h1>
      <TemperatureWrapper>
        {isLoading ? (
          <div>Loading...</div>
        ) : currentWeather ? (
          <>
            <TemperatureValue>{currentWeather.temperature}</TemperatureValue>
            <TemperatureUnit>°C</TemperatureUnit>
          </>
        ) : (
          <div>Error loading temperature</div>
        )}
      </TemperatureWrapper>
    </>
  );
}
