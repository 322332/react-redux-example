import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { val: 0 },
  reducers: {
    increment(state, action) {
      state.val += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
