import { Metadata } from "next";
import KakaoMap from "../../component/Map";
import Weather from "../../component/Weather";
export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div>
      <KakaoMap />
      <Weather />
    </div>
  );
}
