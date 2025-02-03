// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   // cart: [
//   //   {
//   //     pizzaId: 121,
//   //     name: 'BreadButter',
//   //     quantity: 2,
//   //     unitPrice: 20,
//   //     totalPrice: 40,
//   //   },
//   // ],
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       state.cart.push(action.payload);
//     },
//     deleteItem(state, action) {
//       state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
//     },
//     increaseItemQuantity(state, action) {
//       const item = state.cart.find((item) => item.pizzaId === action.payload);

//       item.quantity++;
//       item.totalPrice = item.unitPrice * item.quantity;
//     },
//     decreaseItemQuantity(state, action) {
//       const item = state.cart.find((item) => item.pizzaId === action.payload);

//       item.quantity++;
//       item.totalPrice = item.unitPrice * item.quantity;
//     },
//     clearCart(state) {
//       state.cart = [];
//     },
//   },
// });

// export const {
//   addItem,
//   deleteItem,
//   increaseItemQuantity,
//   decreaseItemQuantity,
//   clearCart,
// } = cartSlice.actions;

// // export const getTotalCartPrice = (state) =>
// // state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export default cartSlice.reducers;

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
