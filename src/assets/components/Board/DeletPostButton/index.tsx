"use client";

import { useRouter } from "next/navigation";
import * as styles from "./index.css";

const DeletePostButton = ({ postId }: any) => {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });

      router.refresh;
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      삭제하기
    </button>
  );
};

export default DeletePostButton;
