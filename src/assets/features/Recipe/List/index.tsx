"use client";
import CardItem from "@/assets/components/Items/CardItem";
import * as styles from "./index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "@/app/Redux/features/cocktailSlice";
import Loading from "@/assets/components/Loading/page";

const RecipeListPage = () => {
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
    <div className={styles.root}>
      <div className={styles.top}>
        <span>총 {modifiedCocktails.length}개</span>
        <div>
          <select>
            <option>오름차순</option>
            <option>내림차순</option>
            <option>등록순</option>
          </select>
        </div>
      </div>
      <div className={styles.bottom}>
        {modifiedCocktails.map((item) => {
          return <CardItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default RecipeListPage;
