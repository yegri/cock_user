"use client";

import { useRouter } from "next/navigation";
import * as styles from "./index.css";

const UpdatePostButton = ({ postId }: any) => {
  const router = useRouter();

  async function handleClick() {
    router.push(`/board/${postId}/edit`);
  }

  return (
    <span onClick={handleClick} className={styles.updateBtn}>
      수정
    </span>
  );
};

export default UpdatePostButton;
