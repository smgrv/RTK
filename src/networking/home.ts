import {baseApiSlice} from './base';

export const walletApiSlice = baseApiSlice.injectEndpoints({
  endpoints: builder => ({
    walletData: builder.query({
      query: () => '/wallets/portfolio',
    }),
  }),
});

export const {useWalletDataQuery} = walletApiSlice;
