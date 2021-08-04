import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    numbers: [],
  },
  reducers: {
    saveNumber(state, action) {
      const number = action.payload;
      state.numbers.push({ numberInput: number });
    },
  },
});

export const { saveNumber } = numberSlice.actions;

export default numberSlice.reducer;
