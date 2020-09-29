import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
     reducer(state, action) {
        const { id, text } = action.payload
        state.push({id, text, completed: false})    
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++}}
      } 
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if(todo) {
        todo.completed = !todo.completed
      }
    }
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
