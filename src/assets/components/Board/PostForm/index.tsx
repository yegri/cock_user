"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState<Number | null>(null);

  const { data: session } = useSession();
  const author = session?.user?.name;
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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // authorId가 null인 경우 처리
    if (authorId === null) {
      console.error("사용자 식별자가 없습니다. 사용자를 다시 로그인하세요.");
      return;
    }

    try {
      await fetch("/api/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, authorId }),
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <>
      {/* <h1>{initialData.title ? "글 수정하기" : "글 작성하기"}</h1> */}

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="title">글 제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="content">내용</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>

        <div>
          <button type="submit">저장하기</button>
          <button>취소하기</button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
