import axios from "../config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { restructureResponse } from "../helpers/apiResponseStructure";

const initialState = {
  query: "",
  matches: [],
  isLoading: false,
  isOpen: false,
};

const titlesApiUrl = "/resources/titles/?start=0&max=10&expandLevel=1&search=";

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
      state.query = "";
      state.isLoading = false;
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
      if (state.query.length === 0) {
        state.isOpen = false;
        state.isLoading = false;
      } else {
        state.isLoading = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBooks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchBooks.fulfilled, (state, action) => {
        if (action.payload.title) {
          state.isOpen = true;
          state.matches = restructureResponse(action.payload.title);
        } else {
          state.isOpen = false;
          state.matches = [];
        }
        state.isLoading = false;
      });
  },
});

export const { reset, close, open, updateQuery } = searchSlice.actions;
