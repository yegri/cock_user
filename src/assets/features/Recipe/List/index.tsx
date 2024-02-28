"use client";
import CardItem from "@/assets/components/Items/CardItem";
import * as styles from "./index.css";

const RecipeListPage = () => {
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
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default RecipeListPage;
