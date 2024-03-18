"use client";

import * as styles from "./index.css";
import Image from "next/image";
import example1 from "@/assets/images/cocktails/Rectangle 254.png";
import heart from "@/assets/images/icon/ph_heart.png";
import heart_fill from "@/assets/images/icon/ph_heart-fill.png";
import { useEffect, useState } from "react";
import prisma from "@/app/lib/prisma";
import { useParams } from "next/navigation";

const BoardDetailPage = ({ postId }: any) => {
  const [postState, setPostState] = useState<{
    title: string;
    authorName: string;
    createdAt: string;
    updatedAt: string | null;
    content: string | null;
  }>({
    title: "",
    authorName: "",
    createdAt: "",
    updatedAt: null,
    content: null,
  });
  const [like, setLike] = useState(false);

  const OnHeartClick = () => {
    setLike(!like);
  };

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/post/${postId}`, {
          method: "GET",
        });
        const postData = await response.json();
        setPostState(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  }, [postId]);

  console.log(postState, "ff");

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>{postState?.title}</h1>
        <div className={styles.info}>
          <p>{postState?.authorName}</p>
          <span>{postState.createdAt}</span>
        </div>
      </div>

      <div className={styles.top}>
        {/* <span className={styles.mainImgBox}>
          <Image src={example1} alt="예시사진" className={styles.mainImg} />
        </span> */}
        <span className={styles.heartBox}>
          <Image
            src={like ? heart_fill : heart}
            alt="빈 하트"
            className={styles.heartImg}
            onClick={OnHeartClick}
          />
        </span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.nameWrap}>{postState?.content}</div>
      </div>
    </div>
  );
};

export default BoardDetailPage;
