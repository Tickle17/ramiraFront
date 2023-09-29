import { createSlice } from "@reduxjs/toolkit";

const modalMenuSlice = createSlice({
  name: "modalMenu",
  initialState: {
    isModalOpen: false,
    selectedProduct: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.selectedProduct = action.payload;
      state.isModalOpen = true;
      document.body.classList.add("no-scroll");
    },
    closeModal: (state) => {
      state.selectedProduct = null;
      state.isModalOpen = false;
      document.body.classList.remove("no-scroll");
    },
  },
});

export const { openModal, closeModal } = modalMenuSlice.actions;
export const selectIsModalOpen = (state) => state.modalMenu.isModalOpen;
export const selectSelectedProduct = (state) => state.modalMenu.selectedProduct;

export default modalMenuSlice.reducer;
