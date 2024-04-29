import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUserInfo } = UserSlice.actions;

export default UserSlice.reducer;
