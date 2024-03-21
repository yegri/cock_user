"use client";

import React from "react";
import * as styles from "./index.css";
import { useRouter } from "next/navigation";

interface PostProps {
  id: Number;
}

const BoardItem = ({ id }: PostProps) => {
  const router = useRouter();

  return (
    <div className={styles.box} onClick={() => router.push(`board/${id}`)}>
      <p className={styles.title}>새로운 레시피 소개합니다.</p>

      <p className={styles.explain}>example</p>
    </div>
  );
};

export default BoardItem;
