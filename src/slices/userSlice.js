import { createSlice } from '@reduxjs/toolkit';
const user = createSlice({
  name: 'user',
  initialState: {
    name: ''
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    logout(state) {
      state.name = '';
    },
  },
});

export const { changeName, logout } = user.actions;

export default user.reducer;