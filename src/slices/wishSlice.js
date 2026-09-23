import {createSlice} from '@reduxjs/toolkit';

const wish = createSlice({
  name: 'wish',
  initialState: [],
  reducers: {
    addWish(state, action) {
      state.push(action.payload);
    },

    deleteWish(state, action) {
      const index = state.findIndex(
        item => item.id === action.payload
      );

      if (index > -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const {addWish,deleteWish} = wish.actions;

export default wish.reducer;