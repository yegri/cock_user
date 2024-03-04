"use client";

import { useEffect, useState } from "react";
import * as styles from "./index.css";
import Link from "next/link";
import { signOut } from "next-auth/react";

const UserModal = ({ userName }: any) => {
  return (
    <div className={styles.root}>
      <p className={styles.name}>{userName} 님</p>

      <div className={styles.box}>
        <Link href="/mypage" className={styles.mypage}>
          마이페이지
        </Link>
        <span className={styles.bar}>|</span>
        <p
          onClick={() => {
            signOut();
          }}
          className={styles.logout}
        >
          로그아웃
        </p>
      </div>
    </div>
  );
};

export default UserModal;
