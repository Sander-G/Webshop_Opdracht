import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://charming-faun-2b1949.netlify.app/.netlify/functions/api/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;
