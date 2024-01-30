"use client";

import { Map } from "react-kakao-maps-sdk";
import useGeolocation from "react-hook-geolocation";

export default function KakaoMap() {
  const geolocation = useGeolocation();

  return (
    <>
      <Map
        center={{ lat: geolocation.latitude, lng: geolocation.longitude }}
        style={{ width: "300px", height: "300px" }}
      ></Map>
    </>
  );
}
