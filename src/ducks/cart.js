import { createSlice } from '@reduxjs/toolkit'
import { getAllBooks } from "../bookData.js";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addBookToCart(state, action) {
      console.log(action.payload)
      const { bookAmount, bookId } = action.payload
      console.log("addBookToCart", bookAmount, bookId)
      state.list.push({id:bookId, amount:bookAmount})
    },
  }
})

export const { addBookToCart } = cartSlice.actions

export default cartSlice.reducer
