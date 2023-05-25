import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type LoginRequestType = {
    username: string;
    password: string;
  };

export type LoginResponseType = {
    AuthenticationResult: AuthenticatonResponse;
    ChallengeParameters: any; //to-do
    sid: string;
  };
  
  export type AuthenticatonResponse = {
    AccessToken: string;
    ExpiresIn: number;
    IdToken: string;
    RefreshToken: string;
    TokenType: string;
  };

export const apiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-staging.pillow.fund:443/api/v1',
  }),
  endpoints: builder => ({
    loginUser: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (body) => ({
        url: '/public/users/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginUserMutation} = apiSlice;
