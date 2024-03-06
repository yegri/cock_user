import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cocktailSlice";
import { useDispatch } from "react-redux";

// 스토어 생성
const store = configureStore({
  reducer: {
    app: cocktailSlice,
  },
});

// useSelector 사용 시 타입으로 사용하기 위함
export type RootState = ReturnType<typeof store.getState>;

// useDispatch를 좀 더 명확하게 사용하기 위함
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
