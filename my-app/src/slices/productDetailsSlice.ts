import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store/store";

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  imageCover: string;
  category?: { name: string };
  brand?: { name: string };
}

interface ProductDetailsState {
  product: ProductDetails | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductDetailsState = {
  product: null,
  status: "idle",
  error: null,
};

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (id: string) => {
    const res = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    return res.data.data as ProductDetails;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error fetching product details";
      });
  },
});

export const selectProductDetails = (state: RootState) =>     state.productDetails.product;
export const selectProductDetailsStatus = (state: RootState) => state.productDetails.status;
export const selectProductDetailsError  =  (state: RootState) => state.productDetails.error;

export const productDetailsReducer = productDetailsSlice.reducer;
