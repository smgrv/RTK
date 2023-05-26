import {createSlice} from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'nameSlice',
  initialState: {
    name:''
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const {setName} = nameSlice.actions;

export default nameSlice.reducer;
