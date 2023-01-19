import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const signupSlice = createSlice({
  name: "signupFormData",
  initialState,
  reducers: {
    signupFormData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { signupFormData } = signupSlice.actions;

export default signupSlice.reducer;
