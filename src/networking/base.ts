import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../redux/store';
import LocalStorage from '../helpers/LocalStorage';

export const baseApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-staging.pillow.fund:443/api/v1',
    prepareHeaders: async (headers, {getState}) => {
      const token = await LocalStorage.getItem('access');
      if (token) headers.append('Authorization', `Bearer ${token}`);
      console.log('headers', headers);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
