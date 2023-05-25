import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-staging.pillow.fund:443/api/v1',
  }),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: (body: {username: string; password: string}) => ({
        url: '/public/users/login',
        method: 'POST',
        body,
      }),
    }),
    // getProduct: builder.query({
    //   query: product => `products/search?q=${product}`,
    // }),
  }),
});

export const {useLoginUserMutation} = productsApi;
