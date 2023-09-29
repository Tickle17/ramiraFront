import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import basketReducer from "../../features/basketRTK/basketRTK";
import modalMenuSlice from "../../features/modalMenu/modalSlice";
import modalBasketSlice from "../../features/modalBasket/modalBasketSlice";
import navMenuBurgerSlice from "../../features/navMenu/navBurger/navBurgerSlice";
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,

    basket: basketReducer,
    modalMenu: modalMenuSlice,
    modalBasketSlice: modalBasketSlice,
    navBurger: navMenuBurgerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
