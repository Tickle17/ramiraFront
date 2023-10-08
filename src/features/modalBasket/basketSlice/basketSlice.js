import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
    clientData: {
      Name: "",
      Phone: "",
      Address: "",
      HouseNumber: "",
      AppartNumber: "",
      EntranceNum: "",
      Comments: "",
    },
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basketItems.push(action.payload);
    },
    addClientData: (state, action) => {
      state.clientData = { ...state.clientData, ...action.payload };
    },
    clearBasket: (state) => {
      state.basketItems = []; // Очищаем корзину
    },
  },
});

export const { addToBasket, addClientData, clearBasket } = basketSlice.actions;
export const selectIsBasketEmpty = (state) =>
  state.basket.basketItems.length === 0;

export default basketSlice.reducer;
