import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  success: false,
};

export const UserSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    addUser: (state, action) => {
      (state.userInfo = action.payload), (state.success = true);
    },

    removeUser: (state) => {
      (state.userInfo = []), (state.success = true);
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
