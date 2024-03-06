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
      });
  },
});

export default cocktailSlice.reducer;
