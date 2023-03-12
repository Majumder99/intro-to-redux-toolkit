import { createSlice } from "@reduxjs/toolkit";

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file.
//i can create multiple slices
//for new slice i need to open new js file
export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  //functionality of the websites
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

//i can export my reducers functions like this
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
