import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:8080/api/v1';

export const MyAccountApi = createApi({
  reducerPath: 'MyAccountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', localStorage.getItem('accessToken'));
      return headers;
    },
  }),
  tagTypes: ['Automation'],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (params) => {
        return {
          url: `/sign_in`,
          method: 'POST',
          body: params,
        };
      },
    }),

    forgetPassword: builder.mutation({
      query: (params) => {
        return {
          url: `/forget-password`,
          method: 'POST',
          body: params,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useForgetPasswordMutation } = MyAccountApi;
