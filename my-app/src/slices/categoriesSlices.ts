import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store/store";

interface Category {
  _id: string;
  name: string;
  image: string;
}

interface CategoriesState {
  categories: Category[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  status: "idle",
  error: null,
};

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const response = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  return response.data.data as Category[];
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error fetching categories";
      });
  },
});

export const selectCategories = (state: RootState) => state.categories.categories;
export const categoriesReducer = categoriesSlice.reducer;
