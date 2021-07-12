import { createSlice } from '@reduxjs/toolkit'
import { getAllBooks } from "../bookData.js";

const booklistSlice = createSlice({
  name: 'booklist',
  initialState: {
    list: getAllBooks().slice(0, 20),
  },
  reducers: {
    loadMoreBooks(state, action) {
      const { amount } = action.payload
      // const amount = action.payload.amount
      const nextTenBooks = getAllBooks().slice(11, 21)
      state.list = [...state.list, ...nextTenBooks]
      // nawias kwadratowy, który w 15 linijce na zewnątrz mówi stwórz nową tablicę
      // ...state.list mówi "do tej nowej tablicy wrzuć wszystkie nowe elementy z list z obecnego stanu"
      // ...nextTenBooks mówi "do tej nowej tablicy która już jest w state.list dodaj na końcu elementy tablicy nextTenBooks"
    },
  }
})

export const { loadMoreBooks } = booklistSlice.actions

export default booklistSlice.reducer
