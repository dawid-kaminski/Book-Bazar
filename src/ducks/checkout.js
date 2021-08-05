import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    addresses: [],
  },
  reducers: {
    saveAddress(state, action) {
      const { title, address } = action.payload;
      state.addresses.push({ titleInput: title, addressInput: address });
    },
  },
});

export const { saveAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
