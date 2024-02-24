"use client";

import { FormEvent, useState } from "react";
import * as styles from "./index.css";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      // 회원가입 데이터를 JSON 형태로 만듭니다.
      const userData = {
        email,
        password,
        userName,
      };

      // 회원가입 API에 데이터를 POST 요청으로 보냅니다.
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        redirect("/signin");
      }
    } catch {}
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.h1}>회원가입</h2>
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <div className={styles.inputBox2}>
          <label htmlFor="id" className={styles.p}>
            아이디
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={email}
            onChange={onChangeId}
            required
          />
          <button className={styles.idBtn}>중복확인</button>
        </div>

        {/* 비밀번호 */}
        <div className={styles.inputBox}>
          <label htmlFor="password" className={styles.p}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePw}
            required
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className={styles.inputBox}>
          <label htmlFor="passwordCheck" className={styles.p}>
            비밀번호 확인
          </label>
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePwCheck}
            required
          />

          {password !== passwordCheck && "비밀번호가 일치하지 않습니다."}
        </div>

        {/* 이름 */}
        <div className={styles.inputBox}>
          <label htmlFor="name" className={styles.p}>
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userName}
            onChange={onChangeUserName}
            required
          />
        </div>

        {/* 닉네임 */}
        {/* <div className={styles.inputBox}>
          <label htmlFor="nickName" className={styles.p}>
            닉네임
          </label>
          <input
            type="text"
            id="nickName"
            name="nickName"
            value={nickName}
            onChange={onChangeNickName}
            required
          />
        </div> */}

        {/* 회원가입 버튼 */}
        <div className={styles.buttonBox}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
