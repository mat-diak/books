import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: null,
  isLoading: false,
  message: "Please select a book...",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    reset: (state) => {
      state.book = null;
      state.message = "Please select a book...";
    },
    selectTitle: (state, action) => {
      state.book = action.payload;
    },
  },
});

export const { reset, selectTitle } = mainSlice.actions;
