import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  emailAddress: '',
};

export const emailSlice = createSlice({
  name: 'emailSlice',
  initialState,
  reducers: {
    setemailAddress(state, action) {
      state.emailAddress = action.payload;
    },
  },
});

export const {setemailAddress} = emailSlice.actions;

export default emailSlice.reducer;
