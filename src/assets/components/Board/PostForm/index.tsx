"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";
import * as styles from "./index.css";

const PostForm = ({ postId }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState<Number | null>(null);

  // 로그인한 유저 데이터
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // 세션 데이터가 로드되면 사용자 식별자를 설정
    if (session?.user?.id) {
      setAuthorId(session.user.id);
    }
  }, [session]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    // postId가 존재하면 해당 글 데이터를 불러옴
    if (postId) {
      // postId를 사용하여 글 데이터를 불러오는 API 호출
      fetch(`/api/post/${postId}`)
        .then((response) => response.json())
        .then((postData) => {
          setTitle(postData.title);
          setContent(postData.content);
          // 작성자 식별자를 설정
          setAuthorId(postData.authorId);
        })
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [postId]);

  // 새 글 작성 및 수정 로직
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // authorId가 null인 경우 처리
    if (authorId === null) {
      console.error("사용자 식별자가 없습니다. 사용자를 다시 로그인하세요.");
      return;
    }

    try {
      // postId가 있으면 글 수정, 없으면 새 글 작성
      const url = postId ? `/api/post/${postId}` : "/api/addpost";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, authorId }),
      });
      alert("저장하시겠습니까?");
      router.push("/board");
      router.refresh();
    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <div className={styles.formBox}>
      <h1 className={styles.formTitle}>
        {title ? "글 수정하기" : "글 작성하기"}
      </h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="title" className={styles.label}>
            제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.textAreaBox}>
          <label htmlFor="content" className={styles.label}>
            내용
          </label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className={styles.textArea}
          />
        </div>

        <div className={styles.buttonBox}>
          <button type="submit" className={styles.saveBtn}>
            저장하기
          </button>
        </div>

        <div className={styles.buttonBox}>
          <p
            onClick={() => {
              alert(
                "작성 중인 내용은 저장되지 않습니다. 그래도 취소하시겠습니까?"
              );
              router.push("/board");
            }}
            className={styles.cancelTxt}
          >
            취소하기
          </p>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
