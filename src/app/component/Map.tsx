"use client";
import { useEffect } from "react";
import styled from "styled-components";
import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";
import useGeolocation from "react-hook-geolocation";
declare global {
  interface Window {
    kakao: any;
  }
}
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=feaca58ec08b5a0500705ae60c0995a9&autoload=false`;

export default function KakaoMap() {
  const geolocation = useGeolocation();
  console.log("여기는 맵", geolocation);

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: geolocation.latitude, lng: geolocation.longitude }}
        style={{ width: "300px", height: "300px" }}
      ></Map>
    </>
  );
}
