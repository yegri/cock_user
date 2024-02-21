import Link from "next/link";
import * as styles from "./index.css";
import SignInButton from "@/assets/components/Button/SignInButton";

const SignInPage = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.h1}>로그인</h2>
      <form>
        {/* 아이디 */}
        <div className={styles.inputBox}>
          <p className={styles.p}>ID</p>
          <input type="text" />
        </div>

        {/* 비밀번호 */}
        <div className={styles.inputBox}>
          <p className={styles.p}>PASSWORD</p>
          <input type="password" />
        </div>

        {/* 로그인 버튼 */}
        <div className={styles.buttonBox}>
          <SignInButton />

          <div className={styles.navi}>
            <Link href="/">ID/PW 찾기</Link>
            <Link href="/sign/up">회원가입</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
