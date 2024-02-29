"use client";

import BoardItem from "@/assets/components/Items/BoradItem";
import * as styles from "./index.css";
import BoardNewItem from "@/assets/components/Items/BoardNewItem";

const BoardListPage = () => {
  const dummy = {
    id: 1,
  };

  return (
    <div className={styles.root}>
      <div className={styles.hotPost}>
        <h2>인기 게시글</h2>
        <div className={styles.hotPostItemBox}>
          <BoardItem id={dummy.id} />
        </div>
      </div>

      <div className={styles.newPost}>
        <h2>최근 게시글</h2>
        <BoardNewItem id={dummy.id} />
      </div>
    </div>
  );
};

export default BoardListPage;
