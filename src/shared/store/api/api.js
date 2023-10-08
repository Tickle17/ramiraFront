import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Определите URL вашего сервера
const baseUrl = "https://dornetshop.ru/";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "menu/menuItems",
    }),
    saveMenuData: builder.mutation({
      query: (editedItem) => ({
        url: "menu/addMenuItem",
        method: "POST",
        body: editedItem,
      }),
    }),
    sendOrder: builder.mutation({
      query: (orderData) => ({
        url: "tlg/sendMessage", // Укажите путь для отправки заказа
        method: "POST",
        body: orderData,
      }),
    }),
    delMenuItem: builder.mutation({
      query: (idItem) => ({
        url: "menu/deleteMenuItem",
        method: "POST",
        body: idItem,
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useSaveMenuDataMutation,
  useSendOrderMutation,
  useDelMenuItemMutation,
} = api;
export default api;
