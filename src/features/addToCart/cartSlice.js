import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")): [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`product added again`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.info(`product added`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex === -1) {
        return;
      } else {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.error(`removed from cart`, {
            position: "bottom-left",
          });
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          state.cartItems = nextCartItems;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
          toast.error(`!add atleast one product`, {
            position: "bottom-left",
          });
        }
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart Cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { pricePerServing, cartQuantity } = cartItem;
          const itemTotal = pricePerServing * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total.toFixed(2);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem,clearCart, getTotals } = cartSlice.actions;
