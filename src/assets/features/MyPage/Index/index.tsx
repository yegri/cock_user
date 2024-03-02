"use client";

import { useState } from "react";
import * as styles from "./index.css";
import EditInfo from "../\bEditInfo";

const MyPageIndex = () => {
  const [tab, setTab] = useState("info");

  return (
    <div className={styles.root}>
      <h2 className={styles.h1}>마이 페이지</h2>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <span
            className={`${styles.txt} ${tab === "info" && styles.active}`}
            onClick={() => setTab("info")}
          >
            정보수정
          </span>
        </div>
        <div className={styles.tab}>
          <span
            className={`${styles.txt} ${tab === "posts" && styles.active}`}
            onClick={() => setTab("posts")}
          >
            작성한 글
          </span>
        </div>
        <div className={styles.tab}>
          <span
            className={`${styles.txt} ${tab === "likes" && styles.active}`}
            onClick={() => setTab("likes")}
          >
            좋아요
          </span>
        </div>
      </div>

      {tab === "info" && <EditInfo />}
    </div>
  );
};

export default MyPageIndex;
