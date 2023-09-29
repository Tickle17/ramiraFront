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
      state.items.push(action.payload);
    },
    addClientData: (state, action) => {
      state.clientData = { ...state.clientData, ...action.payload };
    },
  },
});

export const { addToBasket, addClientData } = basketSlice.actions;
export default basketSlice.reducer;
