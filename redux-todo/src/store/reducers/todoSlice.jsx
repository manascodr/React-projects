import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: [{
    id: nanoid(),
    text: "Sample Todo",
  }],
};

export const todosSlice = createSlice({
  name: "todosName",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo:(state,action)=>{
      state.todos = state.todos.filter((todo)=>todo.id !== action.payload) 
    }
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
