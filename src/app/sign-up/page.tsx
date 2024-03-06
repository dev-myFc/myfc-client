"use client";
import { Metadata } from "next";

import styles from "../../styles/sign-up.module.css";
import btnStyle from "../../styles/button.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    alert("회원가입이 완료되었습니다");
    router.push("/");
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요"
          className={styles.input}
        ></input>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          className={styles.input}
        ></input>
        <input
          type="submit"
          value={"회원가입하기"}
          className={btnStyle.button}
        />
      </form>
    </div>
  );
}
