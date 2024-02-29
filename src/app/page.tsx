import CardItem from "@/assets/components/Items/CardItem";
import * as styles from "./main.css";
import Link from "next/link";
import ListItem from "@/assets/components/Items/ListItem";
import BoardItem from "@/assets/components/Items/BoradItem";

export default function Home() {
  const dummy = {
    id: 1,
  };

  return (
    <div className={styles.mainWrap}>
      {/* 추천 레시피 */}
      <div className={styles.mainFirst}>
        <Link href="/recipe" className={styles.mainTitle}>
          추천 레시피
        </Link>
        <div>
          <CardItem id={dummy.id} />
        </div>
      </div>

      {/* TOP10 레시피 */}
      <div className={styles.mainSecond}>
        <Link href="/recipe" className={styles.mainTitle}>
          TOP10 레시피
        </Link>
        <div>
          <ListItem />
        </div>
      </div>

      {/* 인기 게시글 */}
      <div className={styles.mainSecond}>
        <Link href="/board" className={styles.mainTitle}>
          인기 게시글 &gt;
        </Link>
        <div className={styles.boardBox}>
          <BoardItem id={dummy.id} />
        </div>
      </div>
    </div>
  );
}
