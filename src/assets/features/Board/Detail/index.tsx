"use client";

import * as styles from "./index.css";
import Image from "next/image";
import example1 from "@/assets/images/cocktails/Rectangle 254.png";
import heart from "@/assets/images/icon/ph_heart.png";
import heart_fill from "@/assets/images/icon/ph_heart-fill.png";
import { useEffect, useState } from "react";
import prisma from "@/app/lib/prisma";
import { useParams } from "next/navigation";

const BoardDetailPage = () => {
  const { id } = useParams() as { id: string };

  console.log(id);

  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const postData = await getPostById(id);
  //       setPost(postData);
  //     } catch (error) {
  //       console.error("Error fetching post:", error);
  //     }
  //   };

  //   if (id) {
  //     fetchPost();
  //   }
  // }, [id]);

  const OnHeartClick = () => {
    setLike(!like);
  };

  return (
    <div className={styles.root}>
      {/* <div className={styles.title}>
        <h1>{post?.title}</h1>
        <div className={styles.info}>
          <p>{post?.authorName}</p>
          <span>{post.createdAt}</span>
        </div>
      </div> */}

      <div className={styles.top}>
        <span className={styles.mainImgBox}>
          <Image src={example1} alt="예시사진" className={styles.mainImg} />
        </span>
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
        <div className={styles.nameWrap}>
          <h1>Cocktail Name</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className={styles.ingredientsWrap}>
          <h2>필요한 재료</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailPage;
