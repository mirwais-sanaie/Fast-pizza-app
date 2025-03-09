import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: "Margherita",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 30,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      item.quantity--;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
