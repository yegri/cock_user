import { SyntheticEvent, useRef } from "react";
import * as styles from "./index.css";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "@/app/Redux/features/cocktailSlice";
import { AppDispatch } from "@/app/Redux/store";

const SearchBox = () => {
  const searchTerm = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchTerm.current) {
      const searchText = searchTerm.current.value;
      dispatch(fetchSearchCocktails({ searchText }));
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        ref={searchTerm}
        placeholder="칵테일 이름 검색"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchBtn}>
        검색
      </button>
    </form>
  );
};

export default SearchBox;
