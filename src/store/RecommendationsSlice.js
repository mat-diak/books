import axios from "../config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  categories: {},
  isLoading: false,
  tags: [
    "Classics",
    "Fantasy",
    "Adventure",
    "Mystery",
    "Horror",
    "Science",
    "Art",
    "Self-Discovery",
    "Health",
    "History",
    "Family",
    "Humor",
    "Love",
  ],
};

const titlesApiUrl = "/resources/titles/?start=0&max=5&expandLevel=1&theme=";

export const getBooksByTheme = createAsyncThunk(
  "suggestionsByTheme/query",
  async (theme) => {
    const res = await axios.get(titlesApiUrl + theme);

    return res.data;
  }
);

export const recommendationsSlice = createSlice({
  name: "suggestionsByTheme",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.results = [];
      state.categories = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksByTheme.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBooksByTheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = [...state.results, ...action.payload.title];
      });
  },
});

export const { reset } = recommendationsSlice.actions;
