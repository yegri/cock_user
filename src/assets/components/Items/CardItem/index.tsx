"use client";

import React from "react";
import * as styles from "./index.css";
import { useRouter } from "next/navigation";

interface CocktailProps {
  item: {
    id: string;
    glass: string;
    img: string;
    info: string;
    name: string;
  };
}

const CardItem = ({ item }: CocktailProps) => {
  const router = useRouter();

  return (
    <div
      className={styles.box}
      onClick={() => router.push(`recipe/${item.id}`)}
    >
      <div className={styles.top}>
        <img src={item.img} alt={item.name} className={styles.thumbnail} />
      </div>
      <div className={styles.bottom}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.explain}>
          {item.info}
          {item.glass}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
