import { createSlice } from '@reduxjs/toolkit'
import { getAllBooks } from "../bookData.js";

const booklistSlice = createSlice({
  name: 'booklist',
  initialState: getAllBooks(),
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
  }
})

export const { addTodo } = booklistSlice.actions

export default booklistSlice.reducer
