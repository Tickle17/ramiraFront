import { combineReducers, configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import basketReducer from "../../features/basketRTK/basketRTK";
import modalMenuSlice from "../../features/modalMenu/modalSlice";
import modalBasketSlice from "../../features/modalBasket/modalBasketSlice";
import navMenuBurgerSlice from "../../features/navMenu/navBurger/navBurgerSlice";
import authSlice from "../../features/authSlice/authSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const combineReducer = combineReducers({
  [api.reducerPath]: api.reducer,

  basket: basketReducer,
  modalMenu: modalMenuSlice,
  modalBasketSlice: modalBasketSlice,
  navBurger: navMenuBurgerSlice,
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, combineReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
export default store;
