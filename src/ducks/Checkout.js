import { createSlice } from '@reduxjs/toolkit'

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    addresses: [],
  },
  reducers: {
    saveAddress(state, action) {
      console.log("add Address")
      console.log(action.payload)
      state.addresses.push({street:"test"})
    },
  }
})

export const { saveAddress } = checkoutSlice.actions

export default checkoutSlice.reducer
