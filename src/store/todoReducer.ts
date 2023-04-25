import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '@/interfaces';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state: any, action) {
      state.push({
        id: action.payload.id,
        date: action.payload.date,
        dateString: action.payload.dateString,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    clearTodos(state: any) {
      return [];
    },
    removeTodo(state: any, action) {
      return state.filter((item: Todo) => item.id !== action.payload.id);
    },
    editTodo(state: any, action) {
      return state.map((item: Todo) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return item;
      });
    },
  },
});

export const {addTodo, clearTodos, removeTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;
