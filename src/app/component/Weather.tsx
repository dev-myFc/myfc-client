"use client";
import useGeolocation from "react-hook-geolocation";
import styled from "styled-components";
const API_KEY = "b942b943f628696e1d2151f2b653d059";
const WeatherContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: pink;
`;

export default function Weather() {
  const geolocation = useGeolocation();
  console.log(geolocation);
  return <WeatherContainer>안녕하세영</WeatherContainer>;
}
