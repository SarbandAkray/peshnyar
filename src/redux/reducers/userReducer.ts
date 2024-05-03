import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_session: null,
  loading: false,
  error: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    updateUserInfo: (state, action) => {
      state.user_session = action.payload;
    },
  },
});

export const { updateUserInfo, loading } = UserSlice.actions;

export default UserSlice.reducer;
