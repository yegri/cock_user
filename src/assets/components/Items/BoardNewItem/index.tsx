"use client";
import Image from "next/image";
import React from "react";
import * as styles from "./index.css";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

interface PostProps {
  num: number;
  id: string;
  title: string;
  content: string | null;
  createdAt: Date;
  authorName: string | null;
}

const BoardNewItem = ({
  num,
  id,
  title,
  content,
  authorName,
  createdAt,
}: PostProps) => {
  const router = useRouter();

  const newFormat = dayjs(createdAt).format("YYYY-MM-DD H:mm:ss");

  return (
    <div className={styles.box} onClick={() => router.push(`board/${id}`)}>
      <p className={styles.num}>{num}</p>
      <p className={styles.name}>{title}</p>
      <p className={styles.author}>{authorName}</p>
      <p className={styles.date}>{newFormat}</p>
      <p className={styles.like}>1</p>
    </div>
  );
};

export default BoardNewItem;
