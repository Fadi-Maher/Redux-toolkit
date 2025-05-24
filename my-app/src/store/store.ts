import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../slices/productsSlices";
import { categoriesReducer } from "../slices/categoriesSlices";
import { cartReducer } from "../slices/cartSlice";
import { productDetailsReducer } from "../slices/productDetailsSlice";



export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    productDetails : productDetailsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
