import {configureStore} from '@reduxjs/toolkit';
import {loginApiSlice} from '../networking/login';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import emailReducer from './emailSlice';
import { baseApiSlice } from '../networking/base';
import nameReducer from './nameSlice';

export const store = configureStore({
  reducer: {
    email: emailReducer,
    name: nameReducer,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;