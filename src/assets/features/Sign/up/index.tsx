"use client";

import * as styles from "./index.css";

const SignUpPage = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.h1}>회원가입</h2>
      <form>
        {/* 아이디 */}
        <div className={styles.inputBox2}>
          <label htmlFor="id" className={styles.p}>
            아이디
          </label>
          <input type="text" id="id" name="id" />
          <button className={styles.idBtn}>중복확인</button>
        </div>

        {/* 비밀번호 */}
        <div className={styles.inputBox}>
          <label htmlFor="password" className={styles.p}>
            비밀번호
          </label>
          <input type="password" id="password" name="password" />
        </div>

        {/* 비밀번호 확인 */}
        <div className={styles.inputBox}>
          <label htmlFor="passwordCheck" className={styles.p}>
            비밀번호 확인
          </label>
          <input type="password" id="passwordCheck" name="passwordCheck" />
        </div>

        {/* 이름 */}
        <div className={styles.inputBox}>
          <label htmlFor="name" className={styles.p}>
            이름
          </label>
          <input type="text" id="name" name="name" />
        </div>

        {/* 닉네임 */}
        <div className={styles.inputBox}>
          <label htmlFor="nickName" className={styles.p}>
            닉네임
          </label>
          <input type="text" id="nickName" name="nickName" />
        </div>

        {/* 회원가입 버튼 */}
        <div className={styles.buttonBox}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
