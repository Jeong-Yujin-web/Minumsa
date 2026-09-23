import {createSlice} from '@reduxjs/toolkit';

const cart=createSlice({
  name: 'cart',
  initialState:[],
  reducers:{
    addItem(state,action){
      const index =state.findIndex((findId) => findId.id === action.payload.id);
      if (index > -1){
        state[index].count++;
      }else{
        state.push(action.payload);
      }
    },
    deleteItem(state,action){
      const index=state.findIndex((findId)=>findId.id === action.payload);
      state.splice(index,1);
    },
    addCount(state, action){
      const index=state.findIndex((findId)=>findId.id === action.payload);
      state[index].count++;
    },
    subCount(state, action){
      const index=state.findIndex((findId)=>findId.id === action.payload);
      if(state[index].count === 0){
        state[index].count=0;
      }else{
        state[index].count--;
      }
    }
  }
})
export const {addItem, deleteItem, addCount, subCount}=cart.actions;

export default cart.reducer;