"use client";

import * as styles from "./index.css";
import Image from "next/image";
import example1 from "@/assets/images/cocktails/Rectangle 254.png";
import heart from "@/assets/images/icon/ph_heart.png";
import heart_fill from "@/assets/images/icon/ph_heart-fill.png";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";

const BoardDetailPage = ({ postId }: any) => {
  // 로그인한 유저 정보
  const { data: session } = useSession();
  const userId = session?.user?.id;

  // 좋아요
  const [like, setLike] = useState(false);

  const OnHeartClick = () => {
    setLike(!like);
  };

  // 게시글
  const [postState, setPostState] = useState<{
    title: string;
    authorName: string;
    createdAt: string;
    updatedAt: string | null;
    content: string | null;
    authorId: number | null;
  }>({
    title: "",
    authorName: "",
    createdAt: "",
    updatedAt: null,
    content: null,
    authorId: null,
  });

  // 게시글 데이터 가져오기
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

  const newFormat = dayjs(postState?.createdAt).format("YYYY-MM-DD H:mm:ss");

  return (
    <div className={styles.root}>
      <div className={styles.titleBox}>
        <div className={styles.titleTop}>
          <p className={styles.title}>{postState?.title}</p>

          {/* 로그인한 유저와 글쓴 유저가 같을 때만 나타남 */}
          {userId === postState?.authorId && (
            <div className={styles.subTxt}>
              <span>수정</span>
              <span className={styles.bar}>|</span>
              <span>삭제</span>
            </div>
          )}
        </div>

        <div className={styles.info}>
          <p>작성자: {postState?.authorName}</p>
          <span>{newFormat}</span>
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
