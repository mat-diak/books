import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
import { searchSlice } from "./searchSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    search: searchSlice.reducer,
    main: mainSlice.reducer,
  },
});
