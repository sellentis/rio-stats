import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state: any, action) {
      state.users.push({
        id: action.payload.id,
        image: action.payload.image,
        available: action.payload.available,
        count: action.payload.count,
        price: action.payload.price,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeUser(state: any, action: any) {
      state.users = state.users.filter(
        (item: {id: number}) => item.id !== action.payload.id,
      );
    },
  },
});

export const {addUser, removeUser} = cartSlice.actions;

export default cartSlice.reducer;
