"use client";

import * as styles from "./index.css";
import Image from "next/image";
import heart from "@/assets/images/icon/ph_heart.png";
import heart_fill from "@/assets/images/icon/ph_heart-fill.png";
import { useEffect, useState } from "react";
import { fetchSingleCocktails } from "@/app/Redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/Redux/store";
import { useParams } from "next/navigation";
import Loading from "@/assets/components/Loading/page";

const RecipeDetailPage = () => {
  const [modifiedCocktail, setModifiedCocktail] = useState<{
    name: string;
    img: string;
    info: string;
    category: string;
    glass: string;
    instruction: string;
    ingredients: string[];
  }>({
    name: "",
    img: "",
    info: "",
    category: "",
    glass: "",
    instruction: "",
    ingredients: [],
  });

  const [like, setLike] = useState(false);

  const OnHeartClick = () => {
    setLike(!like);
  };

  const { loading, cocktail } = useSelector((state: any) => ({ ...state.app }));

  console.log(cocktail);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams() as { id: string };

  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strDrinkThumb: img,
        strInstructions: instruction,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        category,
        info,
        glass,
        img,
        instruction,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail({
        name: "",
        img: "",
        info: "",
        category: "",
        glass: "",
        instruction: "",
        ingredients: [],
      });
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <p>칵테일 정보가 없습니다.</p>;
  } else {
    const { name, img, info, category, glass, instruction, ingredients } =
      modifiedCocktail;

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.root}>
            <div className={styles.left}>
              <span className={styles.mainImgBox}>
                <img src={img} alt={name} className={styles.mainImg} />
              </span>
              <span className={styles.heartBox}>
                <Image
                  src={like ? heart_fill : heart}
                  alt={like ? "채운 하트" : "빈 하트"}
                  className={styles.heartImg}
                  onClick={OnHeartClick}
                />
              </span>
            </div>

            <div className={styles.right}>
              <div className={styles.nameWrap}>
                <h1>{name}</h1>
                <div className={styles.contentBox}>
                  <p className={styles.subTitle}>카테고리</p>
                  <p className={styles.content}>{category}</p>
                </div>
                <div className={styles.contentBox}>
                  <p className={styles.subTitle}>알코올 여부</p>
                  <p className={styles.content}>{info}</p>
                </div>
                <div className={styles.contentBox}>
                  <p className={styles.subTitle}>칵테일 잔</p>
                  <p className={styles.content}>{glass}</p>
                </div>
              </div>

              <div className={styles.ingredientsWrap}>
                <h2>필요한 재료</h2>
                {ingredients.map((x, i) => {
                  return (
                    <p key={i} className={styles.ingredient}>
                      {x}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default RecipeDetailPage;
