import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./userSlice";
import { loading } from "./loadingSlice";

export const store = configureStore({
  name: "Quick Vote",
  reducer: {
    UserSlice,
    loading: loading.reducer,
  },
});
