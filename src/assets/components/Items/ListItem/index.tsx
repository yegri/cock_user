"use client";
import Image from "next/image";
import React from "react";
import ex1 from "@/assets/images/cocktails/Rectangle 254.png";
import * as styles from "./index.css";

const ListItem = () => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <Image src={ex1} alt="예시 이미지" className={styles.thumbnail} />
      </div>
      <div className={styles.right}>
        <p className={styles.name}>Cocktail Name</p>
        <p className={styles.explain}>example</p>
      </div>
    </div>
  );
};

export default ListItem;
