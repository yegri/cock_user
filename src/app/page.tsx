"use client";
import CardItem from "@/assets/components/Items/CardItem";
import * as styles from "./main.css";
import Link from "next/link";
import ListItem from "@/assets/components/Items/ListItem";
import BoardItem from "@/assets/components/Items/BoradItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCocktails } from "./Redux/features/cocktailSlice";
import Loading from "@/assets/components/Loading/page";

export default function Home() {
  const dummy = {
    id: 1,
  };
  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  const { loading, cocktails, error } = useSelector((state: any) => ({
    ...state.app,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item: any) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;

        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className={styles.mainWrap}>
      {/* 추천 레시피 */}
      <div className={styles.mainFirst}>
        <Link href="/recipe" className={styles.mainTitle}>
          추천 레시피
        </Link>
        <div>{/* <CardItem /> */}</div>
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
