import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
import { searchSlice } from "./searchSlice";

export const store = configureStore({
  reducer: { search: searchSlice.reducer, main: mainSlice.reducer },
});
