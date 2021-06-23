import { createSlice } from '@reduxjs/toolkit'
import { getAllBooks } from "../BookData.js";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addBookToCart(state, action) {
      const { bookAmount, bookId } = action.payload
      const isBookInListAlready = state.list.find(element => element.id === bookId);
      if (!!isBookInListAlready === true) {
        const selectedBook = state.list.find(element => element.id === bookId)
        const selectedBookAmount = selectedBook.amount
        const bookAmountSum = selectedBookAmount + bookAmount
        const selectedBookIndex = state.list.findIndex(element => element.id === bookId)
        state.list[selectedBookIndex] = {id:bookId, amount:bookAmountSum}
      } else {
        state.list.push({id:bookId, amount:bookAmount})
      }
    },
    removeBookFromCart(state, action) {
      const { bookAmount, bookId } = action.payload
      const selectedBook = state.list.find(element => element.id === bookId)
      const selectedBookIndex = state.list.findIndex(element => element.id === bookId)
      if (selectedBook.amount - bookAmount > 0 ) {
        state.list[selectedBookIndex] = {id:bookId, amount:selectedBook.amount - bookAmount}
      }
      else {
        delete state.list[selectedBookIndex]
        state.list = state.list.filter(book => book)
      }
    },
  }
})

export const { addBookToCart, removeBookFromCart } = cartSlice.actions

export default cartSlice.reducer
