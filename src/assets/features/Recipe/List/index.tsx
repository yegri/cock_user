"use client";
import CardItem from "@/assets/components/Items/CardItem";
import * as styles from "./index.css";

const RecipeListPage = () => {
  const dummy = {
    id: 1,
  };

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <span>총 0개</span>
        <div>
          <select>
            <option>오름차순</option>
            <option>내림차순</option>
            <option>등록순</option>
          </select>
        </div>
      </div>
      <div className={styles.bottom}>
        <CardItem id={dummy.id} />
        <CardItem id={dummy.id} />
        <CardItem id={dummy.id} />
        <CardItem id={dummy.id} />
        <CardItem id={dummy.id} />
      </div>
    </div>
  );
};

export default RecipeListPage;
