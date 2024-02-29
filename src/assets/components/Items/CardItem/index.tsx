"use client";
import Image from "next/image";
import React from "react";
import ex1 from "@/assets/images/cocktails/Rectangle 254.png";
import * as styles from "./index.css";
import { useRouter } from "next/navigation";

interface CocktailProps {
  id: Number;
}

const CardItem = ({ id }: CocktailProps) => {
  const router = useRouter();

  return (
    <div className={styles.box} onClick={() => router.push(`recipe/${id}`)}>
      <div className={styles.top}>
        <Image src={ex1} alt="예시 이미지" className={styles.thumbnail} />
      </div>
      <div className={styles.bottom}>
        <p className={styles.name}>Cocktail Name</p>
        <p className={styles.explain}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default CardItem;
