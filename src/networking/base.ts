import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../redux/store';

export const baseApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-staging.pillow.fund:443/api/v1',
    // prepareHeaders: (headers, {getState}) => {
    //   const token = (getState() as RootState).api.mutations
        
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   console.log('headers', headers, token)
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
