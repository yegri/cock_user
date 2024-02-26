import CardItem from "@/assets/components/Items/CardItem";
import * as styles from "./main.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.mainWrap}>
      {/* 추천 레시피 */}
      <div className={styles.mainFirst}>
        <h2>추천 레시피</h2>
        <CardItem />
      </div>

      {/* TOP10 레시피 */}
      <div className={styles.mainSecond}>
        <h2>TOP10 레시피</h2>
      </div>

      {/* 최근 게시글 */}
      <Link href="/" className={styles.mainSecond}>
        <h2>최근 게시글 &gt;</h2>
      </Link>
    </div>
  );
}
