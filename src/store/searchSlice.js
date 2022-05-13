import axios from "../config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  matches: [],
  isLoading: false,
  isOpen: false,
};

const titlesApiUrl = "/resources/titles/?start=0&max=5&expandLevel=1&search=";

export const fetchSearchBooks = createAsyncThunk(
  "search/query",
  async (query) => {
    const res = await axios.get(titlesApiUrl + query);
    return res.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.query = "";
      state.matches = [];
      state.isOpen = false;
    },
    close: (state) => {
      state.isOpen = false;
    },
    open: (state) => {
      if (state.query) {
        state.isOpen = true;
      }
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBooks.pending, (state, action) => {
        state.isOpen = true;
        state.isLoading = true;
      })
      .addCase(fetchSearchBooks.fulfilled, (state, action) => {
        if (action.payload.title) {
          state.matches = action.payload.title;
        } else {
          state.matches = [];
        }
        state.isLoading = false;
      });
  },
});

export const { reset, close, open, updateQuery } = searchSlice.actions;
