import {configureStore, createSlice} from '@reduxjs/toolkit';
const user=createSlice({
  name:'user',
  initialState: {name:'홍길동'},
  reducers: {
    // changeName:(state)=>{
    //   state.name=state.name;
    // 키,키값으로 써도 되고}
    changeName(state) {
      state.name=state.name;
    },
  },
});
export const {changeName} = user.actions;
// user.slice
const cart=createSlice({
  name: 'cart',
  initialState:[],
  reducers:{
    addItem(state,action){
      const index =state.findIndex((findId) => findId.id === action.payload.id);
      if (index > -1){
      // if (index >= 0){과 같지만 인데스는 0부터 시작하니까
        state[index].count++;
      }else{
        state.push(action.payload);
        // 없으면 push해서 하나 만들어올려라
      }
    },
    deleteItem(state,action){
      const index=state.findIndex((findId)=>findId.id === action.payload);
      state.splice(index,1);
      // splice삽입 삭제가 되는것
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

// export const {addItem}=cart.actions;
export default configureStore({
  reducer:{
    user: user.reducer,
    cart: cart.reducer,
  },
});