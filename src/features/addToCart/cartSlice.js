import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { collection, addDoc, getFirestore, setDoc, doc } from "firebase/firestore"; 

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCR-cY6YOinFUmq-Hg2boYKlPLhe519KRU",
//   authDomain: "react-cb60d.firebaseapp.com",
//   databaseURL: "https://react-cb60d-default-rtdb.firebaseio.com",
//   projectId: "react-cb60d",
//   storageBucket: "react-cb60d.appspot.com",
//   messagingSenderId: "217170280099",
//   appId: "1:217170280099:web:164caca3041eef397a0916"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

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
      if (itemIndex >= 0){
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
      updateUserCartFirebase(state.cartItems);
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
          toast.error(`!add atleast one product`, {
            position: "bottom-left",
          });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        updateUserCartFirebase(state.cartItems);
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart Cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      updateUserCartFirebase(state.cartItems)
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
    }
  },
});

async function updateUserCartFirebase(cartData) {

//   try {
//     // const docRef = await addDoc(collection(db, "userCart"), {cartItems: cartData});
//     const user = localStorage.getItem('userData') && JSON.parse((localStorage.getItem('userData') ) );
// console.log(user);
//     const docRef = await setDoc(doc(db, "userCart", user.email), {cartItems: cartData}, {merge: true});
//     console.log("Document written with ID: ", docRef);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  

}

export default cartSlice.reducer;
export const { addItem, removeItem,clearCart, getTotals } = cartSlice.actions;
