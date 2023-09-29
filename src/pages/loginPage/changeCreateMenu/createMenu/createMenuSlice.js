// getBodyMenuApi.js
import { createSlice } from "@reduxjs/toolkit";
import { CreateItemApi } from "../../../../shared/store/api/createItemApi/createItemApi";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    editedItem: {
      img: "",
      title: "",
      description: "",
      price: 0,
      category: "",
      visible: false,
      weight: 0,
    },
  },
  reducers: {
    updateEditedItem: (state, action) => {
      state.editedItem = action.payload;
    },
  },
});

export const { updateEditedItem } = menuSlice.actions;

export default menuSlice.reducer;

export const { useSaveMenuDataMutation } = CreateItemApi;
