import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductsType } from "../types";

interface ProductsState {
  products: ProductsType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<ProductsType[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductsType[]>) => {
        state.status = "succeeded";
        state.products = action.payload;
      }
    );
    builder.addCase(
      fetchProducts.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.status = "failed";
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "An error occurred.";
      }
    );
  },
});

export default productsSlice.reducer;
