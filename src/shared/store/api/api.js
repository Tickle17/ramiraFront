import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Определите URL вашего сервера
const baseUrl = "http://localhost:5001/";

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
  }),
});

export const { useGetItemsQuery, useSaveMenuDataMutation } = api;
export default api;
