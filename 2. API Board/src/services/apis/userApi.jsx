import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/',
        prepareHeaders: (headers) => {
            const token = Cookies.get('userToken');
            if (token) headers.set('Authorization', `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
        }),

        addProduct: builder.mutation({
            query: (body) => ({
                url: `/products`,
                method: "POST",
                body
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation
} = userApi
