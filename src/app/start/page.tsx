import Link from "next/link";
import styles from "../../styles/start.module.css";

export default function Start() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        {" "}
        <div className={styles.title}>MYFC</div>
        <div className={styles.exp}>
          경기 관리부터 <br />팀 커뮤니티까지
        </div>
        <div className={styles.invite}>
          지금 바로 팀을 생성하고 <br />
          팀원을 초대해 보세요
        </div>
      </div>
      <div className={styles.bottom}>
        {" "}
        <Link href={"/login"} className={styles.button}>
          로그인
        </Link>
        <Link href={"/sign-up"} className={styles.button}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
