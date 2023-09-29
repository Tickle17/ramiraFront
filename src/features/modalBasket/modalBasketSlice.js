import { createSlice } from "@reduxjs/toolkit";

const modalBasketSlice = createSlice({
  name: "modalBasketSlice",
  initialState: {
    isModalBasketOpen: false,
  },
  reducers: {
    openBasketModal: (state) => {
      state.isModalBasketOpen = true;
      document.body.classList.add("no-scroll");
    },
    closeBasketModal: (state) => {
      state.isModalBasketOpen = false;
      document.body.classList.remove("no-scroll");
    },
  },
});

export const { openBasketModal, closeBasketModal } = modalBasketSlice.actions;
export const selectIsModalBasketOpen = (state) =>
  state.modalBasketSlice.isModalBasketOpen;
export default modalBasketSlice.reducer;
