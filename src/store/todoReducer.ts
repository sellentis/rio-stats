import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state: any, action) {
      state.push({
        id: action.payload.id,
        date: action.payload.date,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    clearTodos(state: any) {
      return [];
    },
    removeTodo(state: any, action) {
      console.log(action.payload.id);
      return state.filter(
        (item: {id: string}) => item.id !== action.payload.id,
      );
    },
  },
});

export const {addTodo, clearTodos, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
