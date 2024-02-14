import Link from "next/link";
import * as styles from "./index.css";

const SignInPage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>로그인</h1>
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
          <button>로그인</button>

          <div className={styles.navi}>
            <Link href="/">ID/PW 찾기</Link>
            <Link href="/">회원가입</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
