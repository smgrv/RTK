import { baseApiSlice } from './base';

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

export const loginApiSlice = baseApiSlice.injectEndpoints({
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

export const {useLoginUserMutation} = loginApiSlice;
