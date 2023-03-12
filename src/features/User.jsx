import { createSlice } from "@reduxjs/toolkit";

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file.
//i can create multiple slices
export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  //functionality of the websites
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
