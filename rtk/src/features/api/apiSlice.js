import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  reducerPath: 'api',
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({url: '/posts', method: 'GET'}),
    }),
    getAlbums: builder.query({
        query: () => ({ url: '/albums', method: 'GET' })
    })
  }),
});

export const { useGetPostsQuery, useGetAlbumsQuery } = apiSlice;
