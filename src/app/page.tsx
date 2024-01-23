"use client";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import KakaoMap from "./component/Map";
import Weather from "./component/Weather";

declare global {
  interface Window {
    kakao: any;
  }
}
const Container = styled.div`
  width: 100%;
  height: 200vh;
`;

export default function Home() {
  return (
    <Container>
      <div>
        <KakaoMap></KakaoMap>
        <Weather />
      </div>
    </Container>
  );
}
