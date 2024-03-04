"use client";

import { FormEvent, useState } from "react";
import * as styles from "./index.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const EditInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const router = useRouter();

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

  // const onEmailCheck = (e: React.MouseEventHandler<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   const emailData = { email };

  //   fetch("http://localhost:3000/api/emailCheck", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(emailData),
  //   }).then((res) => {
  //     if (res.ok) {
  //       alert("사용할 수 있는 아이디입니다.");
  //     } else {
  //       alert("중복된 아이디입니다.");
  //     }
  //   });
  // };

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
      fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((res) => {
        if (res.ok) {
          alert("회원가입이 완료되었습니다.");
          router.push("/signin");
        } else {
          alert("이미 가입된 아이디입니다. 다른 아이디를 사용해주세요.");
        }
      });
    } catch {}
  };

  return (
    <div className={styles.root}>
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <div className={styles.inputBox2}>
          <label htmlFor="id" className={styles.p}>
            아이디
          </label>
          <div>yeloper@cock.com</div>
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

        {/* 정보수정 버튼 */}
        <div className={styles.buttonBox}>
          <button type="submit">정보 수정</button>
        </div>
      </form>
    </div>
  );
};

export default EditInfo;
