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
    <span onClick={handleClick} className={styles.deleteBtn}>
      삭제
    </span>
  );
};

export default DeletePostButton;
