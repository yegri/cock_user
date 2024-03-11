import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
  AsyncThunk,
} from "@reduxjs/toolkit";

interface CocktailsState {
  loading: boolean;
  cocktails: any[];
  error: any;
  cocktail: any[];
}

type Cocktail = {
  id?: string;
  searchText?: string;
};

// createAsyncThunk를 사용해 비동기로 칵테일 데이터 가져오기
export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    return await res.json();
  }
);

export const fetchSingleCocktails = createAsyncThunk(
  "cocktails/fetchSingleCocktails",
  async ({ id }: Cocktail) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return await res.json();
  }
);

export const fetchSearchCocktails = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({ searchText }: Cocktail) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`
    );
    return await res.json();
  }
);

const cocktailSlice = createSlice({
  // 리듀서 이름
  name: "cocktails",
  // 초기 상태
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
  } as CocktailsState,
  reducers: {},
  // 추가 리듀서
  extraReducers: (builder: ActionReducerMapBuilder<CocktailsState>) => {
    builder
      // 전체 칵테일
      // 데이터 가져오는 중
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      // 데이터 가져오기 성공
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 개별 칵테일
      .addCase(fetchSingleCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktail = action.payload.drinks;
      })
      .addCase(fetchSingleCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 칵테일 검색
      .addCase(fetchSearchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchSearchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cocktailSlice.reducer;
