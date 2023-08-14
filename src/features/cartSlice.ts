import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsType } from "../types";

interface CartState {
  cart: ProductsType[];
  itemAmount: number;
  total: number;
}

const initialStateValue: CartState = {
  cart: [],
  itemAmount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: number; product: ProductsType }>
    ) => {
      const { id, product } = action.payload;
      const newItem = { ...product, amount: 1 };
      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.amount !== undefined) {
          cartItem.amount += 1;
        }
      } else {
        state.cart.push(newItem);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== idToRemove);
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const idToIncrease = action.payload;
      const cartItem = state.cart.find((item) => item.id === idToIncrease);

      if (cartItem && cartItem.amount !== undefined) {
        cartItem.amount += 1;
      }
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const idToDecrease = action.payload;
      const cartItem = state.cart.find((item) => item.id === idToDecrease);

      if (cartItem) {
        if (cartItem.amount !== undefined) {
          cartItem.amount -= 1;
        }
        if (cartItem.amount !== undefined && cartItem.amount < 1) {
          state.cart = state.cart.filter((item) => item.id !== idToDecrease);
        }
      }
    },
    clearCart: () => initialStateValue,
    updateTotal: (state) => {
      state.total = state.cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * (currentItem.amount || 0);
      }, 0);
    },
    updateItemAmount: (state) => {
      state.itemAmount = state.cart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.amount || 0);
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
  updateTotal,
  updateItemAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
