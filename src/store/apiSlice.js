import axios from "../config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  isLoading: false,
};

const titlesApiUrl =
  "/resources/titles/?start=0&max=10&expandLevel=1&authorid=";

export const getBooksByAuthor = createAsyncThunk(
  "suggestionsByAuthor/query",
  async (authorid) => {
    const res = await axios.get(titlesApiUrl + authorid);
    return res.data;
  }
);

export const apiSlice = createSlice({
  name: "suggestionsByAuthor",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksByAuthor.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBooksByAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload.title;
      });
  },
});

export const { reset } = apiSlice.actions;
