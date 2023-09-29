// // menuSlice.js
//
// import { createSlice } from "@reduxjs/toolkit";
//
// const modalMenuSlice = createSlice({
//   name: "modalMenu",
//   initialState: {
//     isModalOpen: false,
//     selectedProduct: null,
//   },
//   reducers: {
//     openModal: (state, action) => {
//       state.selectedProduct = action.payload;
//       state.isModalOpen = true;
//     },
//     closeModal: (state) => {
//       state.selectedProduct = null;
//       state.isModalOpen = false;
//     },
//   },
// });
//
// export const { openModal, closeModal } = modalMenuSlice.actions;
// export const selectIsModalOpen = (state) => state.menu.isModalOpen;
// export const selectSelectedProduct = (state) => state.menu.selectedProduct;
//
// export default modalMenuSlice.reducer;
