"use client";
import useGeolocation from "react-hook-geolocation";
import { useQuery } from "react-query";
import styled from "styled-components";
const WeatherContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: pink;
`;

async function getWeather(key: string | undefined) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.4563&lon=126.7052&appid=${key}&units=metric `; // default는 인천으로... 어느 위치의 날씨를 검색할것인가. 풋살장을 검색했을때의 지역? 아니면 브라우저의 현재 위치? 아니면 둘다?
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export default function Weather() {
  const weatherKey = process.env.NEXT_PUBLIC_API_WEATHER_API_KEY;
  const { isLoading, error, data } = useQuery("weather", () =>
    getWeather(weatherKey)
  );

  return (
    <WeatherContainer>
      {isLoading ? (
        <div>로딩중.... </div>
      ) : (
        <div>
          {data.name}의 온도는 {data.main.temp}도, 체감온도는{" "}
          {data.main.feels_like}도 인데 축구 가능하지?
        </div>
      )}
    </WeatherContainer>
  );
}
