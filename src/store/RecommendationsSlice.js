import axios from "../config/axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { restructureResponse } from "../helpers/apiResponseStructure";
import { toast } from "react-toastify";

const initialState = {
  results: [],
  categories: [],
  isLoading: false,
  tags: {
    Classics: false,
    Fantasy: false,
    Adventure: false,
    Mystery: false,
    Horror: false,
    Science: false,
    Art: false,
    "Self-Discovery": false,
    Health: false,
    History: false,
    Family: false,
    Humor: false,
    Love: false,
  },
};

const titlesApiUrl = "/resources/titles/?start=0&max=500&expandLevel=1&theme=";

export const getBooksByTheme = createAsyncThunk(
  "suggestionsByTheme/query",
  async (theme, thunkAPI) => {
    try {
      const res = await axios.get(titlesApiUrl + theme);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const score = (result, desiredThemes) => {
  let score = 0;
  desiredThemes.forEach((dTheme) => {
    const regex = new RegExp(dTheme.toLowerCase());

    result.themes.forEach((theme) => {
      if (regex.test(theme.toLowerCase())) {
        score++;
      }
    });
  });
  return score;
};

const giveScore = (results, desiredThemes) => {
  results.forEach((result) => (result.score = score(result, desiredThemes)));
  return results;
};

function getUniqueByProperty(property) {
  let values = [];
  let unique = [];

  this.forEach((book) => {
    if (!values.includes(book[property])) {
      values.push(book[property]);
      unique.push(book);
    }
  });
  return unique;
}

function includesAnyOf(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (this.includes(element)) return true;
  }
  return false;
}

Array.prototype.includesAnyOf = includesAnyOf;
Array.prototype.getUniqueByProperty = getUniqueByProperty;

const filterOutCategory = (results, category, leftoverCategories) => {
  return results.filter((result) => {
    let regex = new RegExp(`${category.toLowerCase()}`);
    let newThemes = result.themes.map((theme) =>
      regex.test(theme) ? category.toLowerCase() : theme
    );

    return (
      !newThemes.includes(category.toLowerCase()) ||
      newThemes.includesAnyOf(leftoverCategories)
    );
  });
};

export const recommendationsSlice = createSlice({
  name: "suggestionsByTheme",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.results = [];
      state.categories = {};
      state.isError = false;
      state.message = null;
    },
    removeCategory: (state, action) => {
      state.categories = [...state.categories].filter((category) => {
        return category !== action.payload;
      });
      state.results = filterOutCategory(
        current(state.results),
        action.payload,
        state.categories
      );
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    toggleTag: (state, action) => {
      state.tags[action.payload] = !state.tags[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksByTheme.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBooksByTheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = giveScore(
          [...state.results, ...restructureResponse(action.payload.title)],
          state.categories
        )
          .getUniqueByProperty("workid")
          .sort((a, b) => b.score - a.score);
      })
      .addCase(getBooksByTheme.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { reset, removeCategory, addCategory, toggleTag } =
  recommendationsSlice.actions;
