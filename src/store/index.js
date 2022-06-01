import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
import { searchSlice } from "./searchSlice";
import { recommendationsSlice } from "./RecommendationsSlice";

export const store = configureStore({
  reducer: {
    recommendations: recommendationsSlice.reducer,
    search: searchSlice.reducer,
    main: mainSlice.reducer,
  },
});
