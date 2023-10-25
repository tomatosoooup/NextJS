import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `query AllProducts {

      }`,
    }),
  }),
});

export const { useGetAllProductsQuery } = postApi;
