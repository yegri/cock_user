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

      <p className={styles.explain}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default BoardItem;
