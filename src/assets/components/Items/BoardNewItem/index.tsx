"use client";
import Image from "next/image";
import React from "react";
import ex1 from "@/assets/images/cocktails/Rectangle 254.png";
import * as styles from "./index.css";
import { useRouter } from "next/navigation";

interface PostProps {
  id: string;
  title: string;
  content: string | null;
  authorName: string | null;
}

const BoardNewItem = ({ id, title, content, authorName }: PostProps) => {
  const router = useRouter();

  return (
    <div className={styles.box} onClick={() => router.push(`board/${id}`)}>
      {/* <div className={styles.left}>
        <Image src={ex1} alt="예시 이미지" className={styles.thumbnail} />
      </div> */}
      <div className={styles.right}>
        <p className={styles.name}>{title}</p>
        <p className={styles.author}>{authorName}</p>
        <p className={styles.explain}>{content}</p>
      </div>
    </div>
  );
};

export default BoardNewItem;
