"use client";
import { Metadata } from "next";
import styles from "../../styles/home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [islogin, setLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!islogin) {
      router.push("/start");
    }
  }, []);
  return <div className={styles.wrapper}>여기는 홈</div>;
}
