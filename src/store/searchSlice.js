import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  matches: [],
  isLoading: true,
};

const worksApiUrl =
  "https://reststop.randomhouse.com/resources/works/?start=0&max=5&expandLevel=1&search=";

const config = {
  headers: {
    Accept: "application/json",
  },
};

export const fetchSearchBooks = createAsyncThunk(
  "search/query",
  async (query) => {
    const res = await axios.get(worksApiUrl + query, config);
    return res.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchBooks.fulfilled, (state, action) => {
      action.payload.work
        ? (state.matches = action.payload.work)
        : (state.matches = []);
      state.isLoading = false;
    });
  },
});
