import { createSlice } from "@reduxjs/toolkit";

const navMenuBurgerSlice = createSlice({
  name: "navBurger",
  initialState: {
    isBurgerOpen: false,
  },
  reducers: {
    openMenuBurger: (state) => {
      state.isBurgerOpen = true;
      document.body.classList.add("no-scroll");
    },
    closeMenuBurger: (state) => {
      state.isBurgerOpen = false;
      document.body.classList.remove("no-scroll");
    },
  },
});

export const { openMenuBurger, closeMenuBurger } = navMenuBurgerSlice.actions;
export const selectIsBurgerOpen = (state) => state.navBurger.isBurgerOpen;
export default navMenuBurgerSlice.reducer;
