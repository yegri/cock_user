"use client";

import Link from "next/link";
import * as styles from "./index.css";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [blankId, setBlankId] = useState(false);
  const [blankPw, setBlankPw] = useState(false);
  const router = useRouter();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id.length <= 0) setBlankId(true);
    if (password.length <= 0) setBlankId(true);

    const result = await signIn("credentials", {
      username: id,
      password: password,
      redirect: false,
    });

    if (result?.error === "CredentialsSignin") {
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
    if (result?.ok) {
      alert("로그인이 완료되었습니다.");
      router.push("/");
    }

    if (result?.status === 401) {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다!");
      router.refresh();
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.h1}>로그인</h2>
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <div className={styles.inputBox}>
          <p className={styles.p}>ID</p>
          <input
            type="text"
            name="id"
            value={id}
            onChange={onChangeId}
            required
          />
        </div>

        {/* 비밀번호 */}
        <div className={styles.inputBox}>
          <p className={styles.p}>PASSWORD</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePw}
            required
          />
        </div>

        {/* 로그인 버튼 */}
        <div className={styles.buttonBox}>
          <button type="submit">로그인</button>

          <div className={styles.navi}>
            <Link href="/">ID/PW 찾기</Link>
            <Link href="/signup">회원가입</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
