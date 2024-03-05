import { Metadata } from "next";
import styles from "../../styles/home.module.css";
export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <div className={styles.wrapper}>여기는 홈</div>;
}
