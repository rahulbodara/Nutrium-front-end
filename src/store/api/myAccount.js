import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:8080/api/v1';

export const MyAccountApi = createApi({
  reducerPath: 'MyAccountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', localStorage.getItem('token'));
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

    signUpUser: builder.mutation({
      query: (params) => {
        return {
          url: `/sign_up`,
          method: 'POST',
          body: params,
        };
      },
    }),

    userData: builder.query({
      query: () => {
        return {
          url: `/professionals`,
          method: 'GET',
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

export const { useLoginUserMutation, useForgetPasswordMutation, useSignUpUserMutation, useUserDataQuery } = MyAccountApi;
