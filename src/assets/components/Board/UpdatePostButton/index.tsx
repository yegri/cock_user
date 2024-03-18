"use client";

import { useRouter } from "next/navigation";
import * as styles from "./index.css";

const UpdatePostButton = ({ postId }: any) => {
  const router = useRouter();

  async function handleClick() {
    // 수정하는 로직
  }

  return (
    <span onClick={handleClick} className={styles.updateBtn}>
      수정
    </span>
  );
};

export default UpdatePostButton;
