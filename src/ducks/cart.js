import { createSlice } from '@reduxjs/toolkit'
import { getAllBooks } from "../BookData.js";

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
      const isBookInListAlready = state.list.find(element => element.id === bookId);
      console.log(!!isBookInListAlready)
      if (!!isBookInListAlready === true) {
        const selectedBook = state.list.find(element => element.id === bookId)
        console.log(selectedBook)
        const selectedBookAmount = selectedBook.amount
        const bookAmountSum = selectedBookAmount + bookAmount
        const selectedBookIndex = state.list.findIndex(element => element.id === bookId)
        state.list[selectedBookIndex] = {id:bookId, amount:bookAmountSum}
      } else {
        state.list.push({id:bookId, amount:bookAmount})
      }
    },
  }
})

export const { addBookToCart } = cartSlice.actions

export default cartSlice.reducer
